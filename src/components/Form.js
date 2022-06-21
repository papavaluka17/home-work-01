import { useState } from "react";
import Button from "./Button";

export default function Form() {
    const [inputValue, setinputValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        alert(inputValue);
        setinputValue("")
    }

    return (
        <form action="#" className="formClass" onSubmit={handleSubmit}>
            <div className="inputClass">
                <label className="label" for="text">Rooms</label>
                <input className="input" name="text" type="text" placeholder="rooms" value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
            </div>
            <Button text="Submit" customClass="specialButton"  />
        </form>
    )
}