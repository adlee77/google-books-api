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
    render() {
    return (
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
                  <p>{book.description.replace(/^(.{240}[^\s]*).*/, "$1...")}</p>
                </div>
              </div>
              <div className="col text-right">
                <img src={book.image} />
              </div>
            </div>
          </div>
        </div>
          )})}
      </div>
    );
    }
}
export default Saved;