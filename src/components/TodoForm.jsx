import {useState} from "react";


export function TodoForm (props) {
    const [value,setValue] = useState( props.value )

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
      <>
        <input name={"input"} type={"text"} onChange={handleChange} placeholder={props.placeholder} value={value}/>
        <button onClick={() => props.onSubmit(value)}>{props.buttonLabel}</button>
      </>
    );


}