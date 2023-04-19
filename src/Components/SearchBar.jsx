import React from "react";
import './Style.css';

function SearchBar(props) {
  console.log(props)
    return (
      <>
        <div className="container">
          <br/>
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <input
                  autoComplete="off"
                  name="search"
                  value={props.search}
                  onChange={props.handleChange}
                  className="form-control"
                  placeholder="i.e. Harry Potter"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary searchbtn" type="submit" onClick={props.handleSubmit}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SearchBar;
