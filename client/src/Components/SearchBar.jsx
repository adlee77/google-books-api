import React from "react";

function SearchBar(props) {
  console.log(props)
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">Book Search</div>
          </div>
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <input
                  autoComplete="off"
                  name="search"
                  value={props.search}
                  onChange={props.handleChange}
                  className="form-control"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="Submit" onClick={props.handleSubmit}>
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
