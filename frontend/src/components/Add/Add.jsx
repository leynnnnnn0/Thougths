import { TbCircleLetterX } from "react-icons/tb";
import "./Add.css";
import { useState } from "react";
import axios from "axios";

const Add = ({ handleExit, handleRefresh }) => {
    const [details, setDetails] = useState({
        title: "",
        note: "",
        publisher: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleRefresh();
        const { title, note, publisher } = details;
      await axios.post("http://localhost:8000/addNote", { title, note, publisher }).then(result => console.log(result)).catch(err => console.log(err));
      
      handleExit();
    }

  return (
    <div className="add-box">
      <TbCircleLetterX className="exit-button" onClick={handleExit} />
      <form>
        <input type="text" id="title" placeholder="Title" name="title" onChange={handleChange}/>
        <textarea name="note" id="note" placeholder="Thoughts" onChange={handleChange}></textarea>
        <input type="text" id="publisher" placeholder="Author" name="publisher" onChange={handleChange}/>
        <button id="add-button" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default Add;
