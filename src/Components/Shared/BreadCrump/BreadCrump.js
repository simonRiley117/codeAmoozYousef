import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumb as BreadcrumbBase } from "antd";
import { ReactComponent as SeparatorIcon } from "@Assets/Icons/SeparatorIcon.svg";
import classNames from "classnames";

const { Item } = BreadcrumbBase;

const BreadCrump = ({ title, classes, name, name1, id }) => {
  // { path: '/news/news-info', breadcrumb: title },
  const routes = [
    { path: "/", breadcrumb: "صفحه اصلی" },
    { path: "/news", breadcrumb: "اخبار" },
    { path: "/news/news-info", breadcrumb: name },
    { path: "/courses", breadcrumb: " لیست دوره ها" },
    { path: "/coWorkers", breadcrumb: "همکاران واساتید" },
    { path: "/coWorkers/master", breadcrumb: "اساتید" },
    { path: "/coWorkers/technicalteam", breadcrumb: "technical Team" },
    { path: "/coWorkers/technicalteam/information", breadcrumb: title },
    { path: "/coWorkers/employer", breadcrumb: "تیم کارفرما" },
    { path: "/dashboard/", breadcrumb: "داشبورد " },
    { path: "/dashboard/my-course", breadcrumb: "دوره های من " },
    { path: "/dashboard/messages", breadcrumb: "پیام های من" },
    { path: "/courses/intro", breadcrumb: name },
    { path: "/coursecontent/quiz", breadcrumb: name, state: true },
    { path: "/dashboard/course", breadcrumb: name1 },
    { path: "/coursecontent", breadcrumb: name1 },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  // console.log('breadcrumbs: ', breadcrumbs)
  return (
    <div className={classNames("breadcrumbs", [classes])}>
      <BreadcrumbBase className="breadcrumb" separator={<SeparatorIcon />}>
        {breadcrumbs.map(({ match, breadcrumb, state }) => (
          <Item key={match.pathname}>
            <NavLink
              to={match.pathname}
              state={{
                name: name,
                id: id,
              }}
            >
              {breadcrumb}
            </NavLink>
          </Item>
        ))}
      </BreadcrumbBase>
    </div>
  );
};

BreadCrump.defaultProps = {
  title: "",
};

BreadCrump.propTypes = {
  title: PropTypes.string,
};

export default BreadCrump;
