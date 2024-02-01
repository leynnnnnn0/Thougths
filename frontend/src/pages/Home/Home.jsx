import React from 'react'
import Nav from '../../components/Nav/Nav'
import books from "../../assets/images/books.png"

import "./Home.css"
const Home = () => {
  return (
    <div className="home-page">
      <Nav />
      <div className="main-page">
        <div className="texts">
          <h3>Share your thoughts here.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Minus
            voluptatum fugiat iure repellat unde ipsum obcaecati,<br/> illo ipsa
            laudantium eos!
          </p>
        </div>
        <img className='books-image' src={books} alt="books" />
      </div>
    </div>
  );
}

export default Home