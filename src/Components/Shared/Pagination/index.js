import React from 'react';
import classnames from 'classnames';
import { Pagination as PaginationBase } from 'antd';
import Button from '../Buttons/Button';

// Assets
import { ReactComponent as ArrowIcon } from '@Assets/Icons/arrow-left.svg';

const Pagination = ({ classes, ...rest }) => {
	const itemRender = (current, type, originalElement) => {
		if (type === 'prev') {
			return (
				<Button type='primary' icon={<ArrowIcon />}>
					صفحه قبلی
				</Button>
			);
		}
		if (type === 'next') {
			return (
				<Button type='primary' icon={<ArrowIcon />}>
					صفحه بعدی
				</Button>
			);
		}
		return originalElement;
	};
	return (
		<PaginationBase
			className={classnames('pagination', [classes])}
			showSizeChanger={false}
			hideOnSinglePage
			itemRender={itemRender}
			responsive
			{...rest}
		/>
	);
};

export default Pagination;

// const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
// } = props;

// const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
// });

// if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
// }

// const onNext = () => {
//     onPageChange(currentPage + 1);
// };

// const onPrevious = () => {
//     onPageChange(currentPage - 1);
// };

// let lastPage = paginationRange[paginationRange.length - 1];
// return (
//     <ul
//         className={classnames('pagination-container', { [className]: className })}
//     >
//         <li
//             className={classnames('pagination-item', {
//                 disabled: currentPage === 1
//             })}
//             onClick={onPrevious}
//         >
//             <Button classes="paging-button" `type="primary"`>
//                 صفحه قبلی
//             </Button>
//         </li>
//         {paginationRange.map(pageNumber => {
//             if (pageNumber === DOTS) {
//                 return <li className="pagination-item dots">&#8230;</li>;
//             }

//             return (
//                 <li
//                     className={classnames('pagination-item', {
//                         selected: pageNumber === currentPage
//                     })}
//                     onClick={() => onPageChange(pageNumber)}
//                 >
//                     {pageNumber}
//                 </li>
//             );
//         })}
//         <li
//             className={classnames('pagination-item', {
//                 disabled: currentPage === lastPage
//             })}
//             onClick={onNext}
//         >
//             <Button classes='paging-button' type="primary">
//                 صفحه بعدی
//             </Button>
//         </li>
//     </ul>
// );
