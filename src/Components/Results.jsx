import React from "react";
import './Style.css';

function Results(props){
    return(
        <div className="container">
            {props.results.map((result) => {
                if (result.volumeInfo.imageLinks) {
                    var img = result.volumeInfo.imageLinks.smallThumbnail;
                }
                return(
                    <div className="card" key={result.id}>
                    <div className="card-body">
                    <div className="row">
                    <div className="col">
                        <div className="row">
                            <a href={result.volumeInfo.infoLink}><h5 className="card-title">{result.volumeInfo.title}</h5></a>
                        </div>
                        <div className="row">
                            <h6>{result.volumeInfo.authors ? result.volumeInfo.authors.join(", ") : result.volumeInfo.authors}</h6>
                        </div>
                        <p>{result.volumeInfo.description}</p>
                    </div>
                    <div className="col text-right">
                        {img && <img src={result.volumeInfo.imageLinks.thumbnail} alt="book cover missing"/>} 
                    </div>
                    </div>
                    <div className="row">
                    <button className="btn btn-primary searchbtn" id="savebtn" onClick={() => props.handleSave(result.id)}>Save!</button>
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Results;