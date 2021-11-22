import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumb as BreadcrumbBase } from "antd";
import { ReactComponent as SeparatorIcon } from "@Assets/Icons/SeparatorIcon.svg";
const { Item } = BreadcrumbBase;

<<<<<<< HEAD
const BreadCrump = ({ title }) => {
	const routes = [
		{ path: '/', breadcrumb: 'صفحه اصلی' },
		{ path: '/news', breadcrumb: 'اخبار' },
		{ path: '/news/news-info', breadcrumb: title },
		{ path: '/about-me', breadcrumb: 'درباره ما' },
		{ path: '/mycourse', breadcrumb: 'دوره های من' },
		{ path: '/wallet', breadcrumb: 'کیف پول' },
		{ path: '/setting', breadcrumb: 'تنظیمات' },
		{ path: '/sabadkala', breadcrumb: 'سبدخرید' },
		{ path: '/mycourse/createcourse', breadcrumb: 'ایجاد دوره' },
		{ path: '/mycourse/createseasons', breadcrumb: 'جلسات دوره ' },
		{
			path: '/mycourse/createseasons/createcontent',
			breadcrumb: ' محتوای مبحث ',
		},
	];
	const breadcrumbs = useBreadcrumbs(routes);
	return (
		<div className='breadcrumbs'>
			<BreadcrumbBase className='breadcrumb' separator={<SeparatorIcon />}>
				{breadcrumbs.map(({ match, breadcrumb }) => (
					<Item key={match.url}>
						<NavLink to={match.url}>{breadcrumb}</NavLink>
					</Item>
				))}
			</BreadcrumbBase>
		</div>
	);
=======
const BreadCrump = ({ title, pathsname, name }) => {
  const routes = [
    { path: "/", breadcrumb: "صفحه اصلی" },
    { path: "/news", breadcrumb: "اخبار" },
    { path: "/news/news-info", breadcrumb: title },
    { path: "/about-me", breadcrumb: "درباره ما" },
    { path: "/mycourse", breadcrumb: "دوره های من" },
    { path: "/wallet", breadcrumb: "کیف پول" },
    { path: "/setting", breadcrumb: "تنظیمات" },
    { path: "/mycourse/createcourse", breadcrumb: "ایجاد دوره" },
    { path: "/mycourse/createseasons", breadcrumb: "جلسات دوره " },
    { path: "/dash", breadcrumb: "داشبورد" },
    { path: pathsname, breadcrumb: name },
    {
      path: "/mycourse/createseasons/createcontent",
      breadcrumb: " محتوای مبحث ",
    },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div className="breadcrumbs">
      <BreadcrumbBase className="breadcrumb" separator={<SeparatorIcon />}>
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <Item key={match.url}>
            <NavLink to={match.url}>{breadcrumb}</NavLink>
          </Item>
        ))}
      </BreadcrumbBase>
    </div>
  );
>>>>>>> e0916998f392676be2453f71b9b80538d61129a6
};

BreadCrump.defaultProps = {
  title: "",
};

BreadCrump.propTypes = {
  title: PropTypes.string,
};

export default BreadCrump;
