
import React, { useState } from "react";
import Modal from "@Components/Shared/Modal/Modal";
import MyCoursesTab from "@Components/Layouts/Dashboard/Mycourses/MyCoursesTab";
import CourseRateModal from "@Components/Layouts/Dashboard/Mycourses/CourseRateModal";

const MyCourses = () => {
  const [modal, setModal] = useState(false);
  const handleModalVisible = () => {
    setModal(false);
  };

  const handleModalShow = (uuid, lock) => {
    setModal(true);
  };
  return (
    <div className="MyCourses">
      <MyCoursesTab handleModalShow={handleModalShow}/>
        <Modal visible={modal} onCancel={handleModalVisible}>
          <CourseRateModal />
        </Modal>
    </div>
  );
};

>>>>>>> 37b61d87c43510a96fe78c2d18d555888176a485
export default MyCourses;
