import {TodoItem} from "./TodoItem";

export function TodoList (props) {


    return (
      <>
          <ul>
              {props.items.map((todo) =>
              <TodoItem key={todo.id} todo={todo} onDelete={props.onDelete} onUpdate={props.onUpdate} onComplete={props.onComplete}/>)
              }
          </ul>
      </>
    );



}