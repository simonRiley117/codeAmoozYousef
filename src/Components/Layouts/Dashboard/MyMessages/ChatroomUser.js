import React from 'react'
import Chatroom from './Chatroom'
import img from "@Assets/Pic/course-profile.png";

const ChatroomUser = () => {
    const messageInfo = {
        messages:[
        {
            id:1,
            is_teacher_send:true,
            question_message:"لورم اپیسوم تبارد کحما نتاتند دتایت دارد",
            time:'2:13',
            date:'1400/05/17'
        },
        {
            id:2,
            is_teacher_send:false,
            question_message:"لورم اپیسوم تبارد کحما نتاتند دتایت دارد",
            time:'2:13',
            date:'1400/05/17'
        },
        {
            id:3,
            is_teacher_send:true,
            question_message:"لورم اپیسوم تبارد کحما نتاتند دتایت دارد",
            time:'2:13',
            date:'1400/05/17'
        },
        {
            id:1,
            is_teacher_send:true,
            question_message:"لورم اپیسوم تبارد کحما نتاتند دتایت دارد",
            time:'2:13',
            date:'1400/05/17'
        },
        {
            id:2,
            is_teacher_send:false,
            question_message:"لورم اپیسوم تبارد کحما نتاتند دتایت دارد",
            time:'2:13',
            date:'1400/05/17'
        },
        {
            id:3,
            is_teacher_send:true,
            question_message:"لورم اپیسوم تبارد کحما نتاتند دتایت دارد",
            time:'2:13',
            date:'1400/05/17'
        }
       ]
    }
    return (
        <div className='ChatroomUser'>
           <div className='ChatroomUser__profile d-flex-align'>
           <div className='ChatroomUser__avatar '>
               <img src={img} alt='' />
               
            </div>
            <p>علیرضا میرضایی فر</p>
           </div>
            <Chatroom messageInfo={messageInfo}/>
        </div>
    )
}

export default ChatroomUser
