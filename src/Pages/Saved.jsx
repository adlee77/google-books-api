import React, { Component } from "react";
import API from "../Utils/API";

class Saved extends Component {
    state = {
        books: []
    };
    componentDidMount() {
        API.getSavedBooks()
        .then(res => this.setState({ books: res.data}))
        .catch(console.err)
    }
    handleClick = id => {
      API.deleteSavedBook(id)
      .then(window.location.reload())
    }
    render() {
    return (
      <>
      <div className="row">
          <div className="col text-center">
            <img id="books" src="https://anshulsinha01.files.wordpress.com/2016/03/book-library-header-2109a.jpg"/>
          </div>
      </div>
      <br/>
      <div className="container">
          {this.state.books.map((book) => {
              return (
        <div className="card" key={book._id}>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="row">
                  <a href={book.link}>
                    <h5 className="card-title">{book.title}</h5>
                  </a>
                </div>
                <div className="row">
                  <h6>{book.author.join(", ")}</h6>
                </div>
                <p>{book.description ? book.description.replace(/^(.{240}[^\s]*).*/, "$1...") : book.description}</p>
              </div>
              <div className="col text-right">
                <img src={book.image} alt="book cover missing"/>
              </div>
            </div>
            <button className="btn btn-outline-secondary searchbtn" onClick={() => this.handleClick(book._id)}>
                  Delete
            </button>
          </div>
        </div>
          )})}
        <div className="col text-center">
                <br/>
              <h3>{this.state.books.length === 0 ? "No Saved Books!" : ""}</h3>
        </div>
      </div>
      </>
    );
    }
}
export default Saved;