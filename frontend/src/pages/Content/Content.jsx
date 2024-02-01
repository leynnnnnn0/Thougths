import "./Content.css"
import Nav from "../../components/Nav/Nav.jsx"
import ThoughtsBox from "./ThoughtsBox.jsx"
import axios from "axios";
import Add from "../../components/Nav/Add/Add.jsx";
import { useEffect, useState } from "react";

const Content = () => {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(!refresh);
    console.log(refresh)
  }
  const [showAdd, setShowAdd] = useState(false);
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  }
  const [test, setTest] = useState([]);
  const datas = async () => {
    try {
      const result = await axios.post("http://localhost:8000/display");
      setTest(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    datas();
  }, [refresh]);
  
  const display = test.map(item => {
    return (
      <ThoughtsBox handleRefresh={handleRefresh} id={item._id} key={Math.random(100)} title={item.title} note={item.note} publisher={item.publisher}/>
    )
  });

  return (
    <div className="content">
      <Nav />
      <div className="thoughts-container">
        {test && display}
        <div className="add-content" onClick={handleShowAdd}>
          <button>+</button>
        </div>
      </div>
      {showAdd && <div className="add-container">{<Add handleExit={handleShowAdd} handleRefresh={handleRefresh} />}</div>}
    </div>
  );
}

export default Content