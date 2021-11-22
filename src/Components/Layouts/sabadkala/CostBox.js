import React from 'react'

const CostBox = () => {
    return (
        <div className='primary-box CostBox'>
               <table style={{ width: "100%" }}>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td> مجموع هزینه:</td>
              <td> 500000</td>
              <td>تومان</td>
            </tr>
            <tr>
              <td> تخفیف:</td>
              <td> 100000</td>
              <td>تومان</td>
            </tr>
            <tr>
              <td> پرداختی:</td>
              <td>
                <p>400000</p>
              </td>
              <td>تومان</td>
            </tr>
            <tr>
              <td> تعداد:</td>
              <td> 1</td>
              <td>عدد</td>
            </tr>
          </table>
        </div>
    )
}

export default CostBox
