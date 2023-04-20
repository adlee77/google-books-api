import React from "react";
import './Style.css';

function SearchBar(props) {
    return (
      <>
        <div className="container">
          <br/>
          <div className="row">
            <div className="col">
              <form onSubmit={props.handleSubmit} className="input-group mb-3">
                <input
                  autoComplete="off"
                  name="search"
                  value={props.search}
                  onChange={props.handleChange}
                  className="form-control"
                  placeholder="i.e. Harry Potter"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary searchbtn" type="submit" onSubmit={props.handleSubmit}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default SearchBar;
