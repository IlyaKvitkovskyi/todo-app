import React from 'react';

import addSvg from '../../assets/img/add.svg';

const AddTaskForm = () => {
  return (
    <div className="tasks__form">
      <div className="tasks__form-new">
        <img src={addSvg} alt="Add Icon" />
        <span>Новая задача</span>
      </div>
    </div>
  );
};

export default AddTaskForm;
