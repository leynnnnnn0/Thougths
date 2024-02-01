import "./ThoughtsBox.css";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import Update from "../../components/Update/Update.jsx"
import { useState } from "react";

const ThoughtsBox = ({ title, note, publisher, id, handleRefresh }) => {
  const deleteThought = async (id) => {
    await axios
      .delete("http://localhost:8000/delete", { data: { _id: id.toString() } })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    
    handleRefresh();
  }

    const [edit, setEdit] = useState(false);
    const showEdit = () => {
      setEdit(!edit);
    };
  return (
    <>
      <div className="thoughts-box">
        <div className="modify-button">
          <CiEdit onClick={showEdit}/>
          <MdDeleteForever onClick={() => deleteThought(id)} />
        </div>
        <h3>{title}</h3>
        <p className="note">{note}</p>
        <div className="credits">
          <p>{publisher}</p>
        </div>
      </div>
      {edit && (
        <div className="update-section">
          <Update handleRefresh={handleRefresh} id={id} showEdit={showEdit} title={title} note={note} publisher={publisher} />
        </div>
      )}
    </>
  );
};

export default ThoughtsBox;
