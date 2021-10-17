import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import Button from "../Buttons/Button";
// copy the code below in the component in which you are going to use pagination and then map on currentTableData and instead of cardData you should use your data
//
//const [currentPage, setCurrentPage] = useState(1);
//
//     const currentTableData = useMemo(() => {
//         const firstPageIndex = (currentPage - 1) * PageSize;
//         const lastPageIndex = firstPageIndex + PageSize;
//         return cardData.slice(firstPageIndex, lastPageIndex);
//     }, [currentPage]);
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <Button type="primary">
                    صفحه بعدی
                </Button>
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <Button type="primary">
                    صفحه قبلی
                </Button>
            </li>
        </ul>
    );
};



export default Pagination;
