import {useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import {TodoForm} from "./TodoForm";

export function TodoItem (props) {
    const [edit,setEdit] = useState( false );

    function updateTodo(newValue) {
        props.onUpdate(props.todo.id,newValue);
        setEdit(false);
    }



    return (
      <>
          <li>
              {edit ? (
                  <TodoForm buttonLabel={"Update"} onSubmit={updateTodo} value={props.todo.value}/>
              ) : (
                  <>
                        <span onClick={() => props.onComplete(props.todo.id,!props.todo.complete)}>
                            {props.todo.complete ? <strike>{props.todo.value}</strike> : props.todo.value}
                        </span>
                        <RiCloseCircleLine onClick={() => props.onDelete(props.todo.id)}/>
                        {!props.todo.complete && (
                            <TiEdit onClick={() => setEdit(true) } />
                        )}
                  </>
              )}

          </li>
      </>
    );
}