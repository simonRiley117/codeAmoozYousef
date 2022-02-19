import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumb as BreadcrumbBase } from "antd";
import { ReactComponent as SeparatorIcon } from "@Assets/Icons/SeparatorIcon.svg";
import classNames from "classnames";

const { Item } = BreadcrumbBase;

const BreadCrump = ({ title, classes, id, intro, namestate }) => {
  // { path: '/news/news-info', breadcrumb: title },
  const routes = [
    { path: "/", breadcrumb: "صفحه اصلی" },
    { path: "/news", breadcrumb: "اخبار" },
    { path: "/contact-us", breadcrumb: "ارتباط با ما" },
    { path: "/about-me", breadcrumb: "درباره ما" },
    { path: "/news/news-info", breadcrumb: title },
    { path: "/courses", breadcrumb: " لیست دوره ها" },
    { path: "/coWorkers", breadcrumb: "همکاران واساتید" },
    { path: "/coWorkers/master", breadcrumb: "اساتید" },
    { path: "/coWorkers/technicalteam", breadcrumb: "technical Team" },
    { path: "/coWorkers/technicalteam/information", breadcrumb: title },
    { path: "/coWorkers/employer", breadcrumb: "تیم کارفرما" },
    { path: "/dashboard/", breadcrumb: "داشبورد " },
    { path: "/dashboard/my-course", breadcrumb: "دوره های من " },
    { path: "/dashboard/messages", breadcrumb: "پیام های من" },
    { path: "/courses/intro", breadcrumb: title },
    { path: "/quiz", breadcrumb: title, state: true },
    { path: "/dashboard/course", breadcrumb: title },
    { path: "/coursecontent", breadcrumb: title },
    { path: "/dashboard/wallet", breadcrumb: 'کیف پول' },
    { path: "/dashboard/setting", breadcrumb: 'تنظیمات' },
    { path: "/dashboard/resume", breadcrumb: 'رزومه' },
    { path: "/dashboard/profile", breadcrumb: 'پروفایل' },
    { path: `/example`, breadcrumb: title },
    // { path: "/intro/example", breadcrumb: title },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div className={classNames("breadcrumbs", [classes])}>
      <BreadcrumbBase className="breadcrumb" separator={<SeparatorIcon />}>
        {breadcrumbs.map(({ match, breadcrumb, state }) => (
          <Item key={match.pathname}>
            <NavLink
              to={
                intro
                  ? "/courses/intro"
                  : match.pathname === "/example" || match.pathname === "/quiz"
                  ? "/coursecontent"
                  : match.pathname
              }
              state={{
                name: namestate,
                id: id,
              }}
            >
              {match.pathname === "/example" || match.pathname === "/quiz"
                ? `${namestate} / ${title}`
                : breadcrumb}
              {/* {breadcrumb} */}
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
