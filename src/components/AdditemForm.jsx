

const AdditemForm = ({
    listForm,
    submitHandler,
    title,
    onChangeHandler,
    setEditMode
}) => {
    return (
        <div className="form-container">
            <div className="form-card">
                <form>
                    <textarea value={title}
                    onChange={onChangeHandler}
                    cols="30"
                    row="2"
                    className="form-textArea"
                    ></textarea>
                </form>
            </div>
            <div className="button-container">
                <button className="add-button" onClick={submitHandler}>
                    {listForm?"add list":"add/update task"}
                </button>
                <p className="add-item-icon" onClick={()=>setEditMode(false)}></p>
            </div>
        </div>
    );
};

export default AdditemForm;