import React from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { Table } from "antd";

function Transaction() {
  return (
    <div className="Transaction">
      <BreadCrump pathsname="/dash/transaction" name="تراکنش ها" />
      <p className="Transaction__Title">تراکنش ها</p>
      <div className="Transaction__box">
        <Table pagination={false} columns={columns} dataSource={dataSource} />
      </div>
    </div>
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
    dataIndex: "course",
    key: "دوره",
  },
  {
    title: "نام استاد",
    dataIndex: "master",
    key: "نام استاد",
  },
  {
    title: "نوع مدرک",
    dataIndex: "degree",
    key: "نوع مدرک",
  },
  {
    title: "میزان تخفیف",
    dataIndex: "discount",
    key: "میزان تخفیف",
  },
  {
    title: "پرداختی شما",
    dataIndex: "peyment",
    key: "پرداختی شما",
  },
  {
    title: "تاریخ پرداخت",
    dataIndex: "date",
    key: "تاریخ پرداخت",
  },
];
const dataSource = [
  {
    key: "1",
    column: "1",
    course: "دوره برنامه نویسی python",
    master: "علیرضا میرزایی فرد",
    degree: "مدرک دانشگاه صنعتی شریف",
    discount: "100.000".toLocaleString(),
    peyment: "400.000".toLocaleString(),
    date: "1400 / 05 / 05",
  },
  {
    key: "1",
    column: "1",
    course: "دوره برنامه نویسی python",
    master: "علیرضا میرزایی فرد",
    degree: "مدرک دانشگاه صنعتی شریف",
    discount: "100.000".toLocaleString(),
    peyment: "400.000".toLocaleString(),
    date: "1400 / 05 / 05",
  },
];
