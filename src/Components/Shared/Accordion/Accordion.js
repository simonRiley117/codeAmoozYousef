import React from 'react';
import {Collapse} from 'antd';
import {ReactComponent as Arrow} from '@Assets/Icons/arrow-down.svg';
// import {ReactComponent as Clock} from '@Assets/Icons/clock.svg';
// import {ReactComponent as Lock} from '@Assets/Icons/lock.svg';
import classNames from 'classnames';

const {Panel} = Collapse;

const ArrowIcon = ({active}) => (
    <div
        className={classNames('accordion__arrow', {
            active: active,
        })}
    >
        <Arrow/>
    </div>
);

// const ClockIcon = ({active}) => (
//     <div
//         className={classNames('accordion__arrow', {
//             active: active,
//         })}
//     >
//         <Clock/>
//     </div>
// );

// const LockIcon = ({active}) => (
//     <div
//         className={classNames('accordion__arrow', {
//             active: active,
//         })}
//     >
//         <Lock/>
//     </div>
// );

const Accordion = ({children, half, ...rest}) => {
    return (
        <Collapse
            className={classNames('accordion', {
                accordion__circle: half,
            })}
            expandIcon={({isActive}) => (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ArrowIcon active={isActive}/>
                    {/*<img src={Clock} alt={Clock} active={isActive}/>*/}
                    {/*<img src={Lock} alt={Lock} active={isActive}/>*/}
                    {/*<Lock active={isActive}/>*/}
                    {/*<LockIcon active={isActive}/>*/}
                    {/*<LockIcon active={isActive}/>*/}
                    {/*&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    {/*<p>123456</p>*/}
                    {/*&nbsp;*/}
                    {/*<ClockIcon active={isActive}/>*/}
                </div>
            )}
            ghost
            expandIconPosition='left'
            {...rest}
        >
            {children}
        </Collapse>
    );
};

export {Accordion, Panel};
