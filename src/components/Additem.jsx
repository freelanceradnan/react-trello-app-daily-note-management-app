// import React from 'react';

const Additem = ({listAddItem,setEditMode}) => {
    return (
        <div className={listAddItem?"add-item list-add-item":"add-item task-add-item"}
        onClick={()=>setEditMode(true)}
        
        >
            <p className="add-item-icon">+</p>
            <p className="add-item-text">
                {listAddItem? "add a list":"add a task"}
            </p>
        </div>
    );
};

export default Additem;