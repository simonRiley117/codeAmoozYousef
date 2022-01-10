import React, {useState} from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import {Table} from "antd";
import useFetch from "../../Context/useFetch";

function Transaction() {
    const [transactionData, setTransactionData] = useState(null);
    const [transactionLoading, setTransactionLoading] = useState(true);
    // const [dataSource, setDataSource] = useState([])

    const setData = (data) => {
        let new_data = data.results.map((item, index) => ({...item, column: ++index}))
        console.log('new_data: ', new_data)
        setTransactionData(new_data);
        setTransactionLoading(false);
    };

    const getuserInfo = useFetch({
        url: `CartService/transactions`,
        trigger: true,
        noHeader: false,
        method: "GET",
        setter: setData,
    });

    console.log('transactionData: ', transactionData)
    return (
        !transactionLoading ? (
            <div className="Transaction">
                <p className="Transaction__Title">تراکنش ها</p>
                <div className="Transaction__box">
                    <Table pagination={false} columns={columns} dataSource={transactionData}/>
                </div>
            </div>
        ) : null
    );
}

export default Transaction;
const columns = [
    {
        title: "ردیف",
        dataIndex: "column",
        key: "ردیف",
    },
    {
        title: "دوره",
        dataIndex: "course_name",
        key: "دوره",
    },
    {
        title: "نام استاد",
        dataIndex: "teacher_name",
        key: "نام استاد",
    },
    {
        title: "نوع مدرک",
        dataIndex: "degree_name",
        key: "نوع مدرک",
    },
    {
        title: "میزان تخفیف",
        dataIndex: "discount_amount",
        key: "میزان تخفیف",
    },
    {
        title: "پرداختی شما",
        dataIndex: "discounted_cost",
        key: "پرداختی شما",
    },
    {
        title: "تاریخ پرداخت",
        dataIndex: "date_ordered",
        key: "تاریخ پرداخت",
    },
];
// const dataSource = [
//     {
//         key: "1",
//         column: "1",
//         course: "دوره برنامه نویسی python",
//         master: "علیرضا میرزایی فرد",
//         degree: "مدرک دانشگاه صنعتی شریف",
//         discount: "100.000".toLocaleString(),
//         peyment: "400.000".toLocaleString(),
//         date: "1400 / 05 / 05",
//     },
//     {
//         key: "1",
//         column: "1",
//         course: "دوره برنامه نویسی python",
//         master: "علیرضا میرزایی فرد",
//         degree: "مدرک دانشگاه صنعتی شریف",
//         discount: "100.000".toLocaleString(),
//         peyment: "400.000".toLocaleString(),
//         date: "1400 / 05 / 05",
//     },
// ];
