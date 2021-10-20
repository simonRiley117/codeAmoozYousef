import React,{useState} from 'react';
import FaqAccordion from "../../Components/Layouts/Faq/FaqAccordion";
import {faqData} from "../../Components/Layouts/Faq/FaqData";

const Faq = () => {
    const [activeId,setActiveId] = useState(null)
    return (
        <div className="faq">
            <h2 className="faq-heading title__box">
                 سوالات متداول
            </h2>
            {
                faqData.map(faq => {
                    return (
                   <FaqAccordion activeId={activeId} setActiveId={setActiveId} heading={faq.heading} key={faq.id} id={faq.id}>
                       {faq.text}
                   </FaqAccordion>
                    );})
            }
        </div>
    );
};
export default Faq;