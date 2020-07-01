import React from "react";

function Results(props){
    return(
        <div className="container">
            {props.results.map((result) => {
                return(
                    <div className="card" key={result.id}>
                    <div className="card-body">
                    <div className="row">
                    <div className="col">
                        <div className="row">
                            <a href={result.volumeInfo.infoLink}><h5 className="card-title">{result.volumeInfo.title}</h5></a>
                        </div>
                        <div className="row">
                            <h6>{result.volumeInfo.authors.join(", ")}</h6>
                        </div>
                    </div>
                    <div className="col text-right">
                        <img src={result.volumeInfo.imageLinks.smallThumbnail}/>
                    </div>
                    </div>
                    <p maxLength="100">{result.volumeInfo.description.replace(/^(.{240}[^\s]*).*/, "$1...")}</p>
                    <button className="btn btn-primary" onClick={() => props.handleSave(result.id)}>Save!</button>
                    </div>
                    </div>
                  
                )
            })}
        </div>
    )
}

export default Results;