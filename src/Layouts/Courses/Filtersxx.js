import React from 'react';

const Filtersxx = () => {
   
    return (
        <div className='courses-filters font-bold mb-12'>
            <div className='courses-filters__box'>
                <div className='courses-filters__title'>
                    <h6>فیلتر ها:</h6>
                    <i className="fas fa-chevron-up"></i>
                </div>
                <div className='courses-filters__row'>
                    <div className='courses-filters__column'>
                        <span className='filters-title text-3xl'>دسته بندی زبان های برنامه نویسی :</span>
                        <ul className='filters-items'>
                            <li className='filters-items__active'>همه</li>
                            <li >دسکتاپ</li>
                            <li>تحت وب</li>
                            <li>موبایل</li>
                            <li>چند منظوره</li>
                        </ul>
                    </div>
                    <div className='courses-filters__column'>
                        <span className='filters-title'>هزینه ها :</span>
                        <ul className='filters-items'>
                            <li className='filters-items__active'>همه </li>
                            <li>رایکان</li>
                            <li>تخفیف ها</li>
                            <li>پریمیم</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Filtersxx;