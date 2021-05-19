import React from "react";
import "./style.css";


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">My Books</a></span></h1>
        <div>
          <a className="beige" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google Books
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;