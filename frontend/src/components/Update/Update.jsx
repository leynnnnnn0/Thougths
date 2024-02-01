import { TbCircleLetterX } from "react-icons/tb";
import "./Update.css";
import { useState } from "react";
import axios from "axios";

const Update = ({showEdit, title, note, publisher, id, handleRefresh}) => {
    const [details, setDetails] = useState({
        title: title,
        note: note,
        publisher: publisher
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
      const { title, note, publisher } = details;
      await axios
        .put("http://localhost:8000/updatenote", {
          _id: id.toString(),
          title,
          note,
          publisher,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
      
      handleRefresh();

    }

  return (
    <div className="add-box">
      <TbCircleLetterX onClick={showEdit} className="exit-button"/>
      <form>
        <input type="text" id="title" placeholder="Title" name="title" onChange={handleChange} value={details.title}/>
        <textarea name="note" id="note" placeholder="Thoughts" onChange={handleChange} value={details.note}></textarea>
        <input type="text" id="publisher" placeholder="Author" name="publisher" onChange={handleChange} value={details.publisher}/>
        <button id="add-button" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default Update;
