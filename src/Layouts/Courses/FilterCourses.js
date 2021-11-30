import React,{useState} from "react";
import useFetch from "@App/Context/useFetch";

const FilterCourses = ({cateid,chooseCat}) => {
    const [categories, setCategories] = useState([]);

        
	const getCategories = useFetch({
		url: `HelpsService/categories`,
		// setter:setCategories,
        noHeader: true,

		argFunc: (res) => {
			let category = [];

			res.results.map((item) => {
				category.push({ label: item.name, value: item.id.toString() });
			});

			setCategories(category);
		},
	});
 
  return (
    <div className="courses-filters font-bold mb-12">
      <div className="courses-filters__box">
        <div className="courses-filters__title">
          <h6>فیلتر ها:</h6>
          <i className="fas fa-chevron-up"></i>
        </div>
        <div className="courses-filters__row">
          <div className="courses-filters__column">
            <span className="filters-title text-3xl">
              دسته بندی زبان های برنامه نویسی :
            </span>
            <ul className="filters-items">
              {categories.map((i) => (
                <li
                key={i.value}
                className={cateid=== i.label && "filters-items__active"}
                onClick={()=>chooseCat(i.label)}
                >
                  {i.label}
                </li>
              ))}
              {/* <li className="filters-items__active">همه</li>
              <li>دسکتاپ</li>
              <li>تحت وب</li>
              <li>موبایل</li>
              <li>چند منظوره</li> */}
            </ul>
          </div>
          <div className="courses-filters__column">
            <span className="filters-title">هزینه ها :</span>
            <ul className="filters-items">
              <li className="filters-items__active">همه </li>
              <li>رایگان</li>
              <li>تخفیف ها</li>
              <li>پریمیم</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterCourses;
