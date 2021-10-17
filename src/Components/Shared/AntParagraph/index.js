import React from 'react';
import {Typography} from 'antd';
import PropTypes from 'prop-types';

const AntParagraph = ({children,classes}) => {
    const {Paragraph} = Typography;
    return (
        <Paragraph
            ellipsis={
                {
                    rows: 2,
                    expandable: true,
                    symbol: 'more',
                }
            }
            className={classes}
        >
            {children}
        </Paragraph>

    );
};
AntParagraph.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
};
export default AntParagraph;