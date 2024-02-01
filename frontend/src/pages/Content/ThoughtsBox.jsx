import "./ThoughtsBox.css";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";


const ThoughtsBox = ({ title, note, publisher, id, handleRefresh }) => {
  const editThought = async (id) => {
    
  }
  const deleteThought = async (id) => {
    await axios
      .delete("http://localhost:8000/delete", { data: { _id: id.toString() } })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    
    handleRefresh();
  }
  return (
    <div className="thoughts-box">
      <div className="modify-button">
        <CiEdit />
        <MdDeleteForever onClick={() => deleteThought(id)} />
      </div>
      <h3>{title}</h3>
      <p className="note">{note}</p>
      <div className="credits">
        <p>{publisher}</p>
      </div>
    </div>
  );
};

export default ThoughtsBox;
