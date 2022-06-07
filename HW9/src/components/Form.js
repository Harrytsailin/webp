import React from "react"
import '../index.css';

const Form = ({inputText, setInputText, todos, setTodos, setStatus }) => { 
    function Inputhandlechange(event) {
       setInputText(event.target.value) 
    }

    function submitHandleChange(event) {
        event.preventDefault()
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.floor(Math.random() * 3000)}
        ])

        setInputText("")
    }

    function statusHandleChange(event){
        setStatus(event.target.value)
        console.log(event.target.value)
    }

    return(
        <form>
            <div className="input-option">
                <select name="todos" onChange={statusHandleChange} dir="rtl">
                    <option className="options" value="all">全部</option>
                    <option className="options" value="completed">已完成</option>
                    <option className="options" value="uncompleted">未完成 </option>
                </select>   
            </div>

            <div className="input-text">
                <input className="text"
                    type="text"
                    placeholder="輸入任務內容"
                    value={inputText}
                    onChange={Inputhandlechange}
                />

                <button className="add-button"
                    type="submit"
                    onClick={submitHandleChange}
                >
                    <i className="fas fa-times fa-sx"></i>
                </button>
            </div>
        </form>
    )
}

export default Form