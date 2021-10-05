import React ,{useState,useEffect} from 'react';
import "./Input.css"

const Input=(props)=>{

    const [eneteredVal, seteneteredVal] = useState("");
    const [formIsValid, setFormIsvalid] =useState(true);
    
    // When ever someone wnats to change/ the todo task this useefeect will run and it will set that particualr task text in <input> elem.
    useEffect(() => {
      if (props.onEdit.isEdit) {
        seteneteredVal(props.onEdit.editItem);
      }
    }, [props.onEdit.isEdit,props.onEdit.editItem]);
   
    // will listen every key stroke to update the enteredvalue
    const inputHandler=(event)=>{
        setFormIsvalid(true);
        seteneteredVal(event.target.value);
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(eneteredVal);
        if(eneteredVal.trim()===""){
            setFormIsvalid(false);
            return;
        }
        props.onAddItem(eneteredVal);
        seteneteredVal("");
    }
    return (
      <form onSubmit={submitHandler}>
        <div className={"form-control" + (!formIsValid ? " invalid" : "")}>
          <input
            type="text"
            value={eneteredVal}
            placeholder="Enter the task"
            onChange={inputHandler}
          ></input>
          <button type="submit">
            {!props.onEdit.isEdit ? (
              <i className="fas fa-plus-circle"></i>
            ) : (
              <i className="fas fa-edit"></i>
            )}
          </button>
        </div>
      </form>
    );
}

export default Input