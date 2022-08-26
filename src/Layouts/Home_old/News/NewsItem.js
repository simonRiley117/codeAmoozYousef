import PropTypes from 'prop-types';
import React from 'react';
import Link from '@Components/Shared/Buttons/Link';
import classNames from 'classnames';

const NewsItem = ({id, cover, title, short_description, isActive, isPrev, isNext}) => {
    return (
        <article
            className={classNames('home__news--item', {
                active: isActive,
                next: isNext,
                prev: isPrev,
            })}
        >
            <div className='home__news--item-image'>
                <img src={cover} alt={title}/>
            </div>
            <div className='home__news--item-info'>
                <h2>{title}</h2>
                <p>{short_description}</p>
                <Link to={'/news/news-info'}
                      state={id}
                >بیشتر بخوانید</Link>
            </div>
        </article>
    );
};

NewsItem.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
};
export default NewsItem;
