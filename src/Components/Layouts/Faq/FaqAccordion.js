import React,{useState} from 'react';
//images
import plus from '../../../Assets/Images/Pic/Frame 8.png'
import minus from '../../../Assets/Images/Pic/Frame 11.png'

const FaqAccordion = ({heading, children, id, setActiveId,activeId}) => {
    const boolean = activeId === id;
    const onOpen = () => {
        boolean ? setActiveId(null) :
        setActiveId(id);
    };
    return (
        <div
            style={{border:boolean ? "none" : "1px solid #1212124D",
                boxShadow:boolean ? "0 2px 8px 2px rgba(0,0,0,0.15)" : "none"
            }}
            onClick={() => onOpen()} className="faq-accordion"
        >
           <h3 className="faq-accordion__heading">
               <img className="faq-accordion__img1" src={plus} alt="plus"/>
               <p style={{color:boolean ? "#1A6577" : "black"}} className="faq-accordion__paragraph">
                   {heading}
               </p>
           </h3>
            {  boolean &&
                <div className="faq-accordion__content">
                    {children}
                </div>
            }
        </div>
    );
};
export default FaqAccordion;