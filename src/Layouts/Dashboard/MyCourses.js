import React, {useState} from "react";
import Modal from "@Components/Shared/Modal/Modal";
import MyCoursesTab from "@Components/Layouts/Dashboard/Mycourses/MyCoursesTab";
import CourseRateModal from "@Components/Layouts/Dashboard/Mycourses/CourseRateModal";

const MyCourses = () => {
    const [modal, setModal] = useState(false);
    const handleModalVisible = () => {
        setModal(false);
    }

    const handleModalShow = (uuid, lock) => {
        setModal(true);
    };

    const [selectedCourse, setSelectedCourse] = useState(null)

    return (
        <div className="MyCourses">
            <MyCoursesTab handleModalShow={handleModalShow}
                          setSelectedCourse={setSelectedCourse}/>
            <Modal visible={modal} onCancel={handleModalVisible}>
                <CourseRateModal selectedCourse={selectedCourse}/>
            </Modal>
        </div>
    );
};

export default MyCourses;
