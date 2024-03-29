import React, { Component } from "react";
import SearchBar from "../Components/SearchBar";
import Results from "../Components/Results";
import API from "../Utils/API";

class SearchPage extends Component{
    state = {
        results: [],
        search: ""
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        API.getGoogleBooks(this.state.search).then((results)=>{
            this.setState({
                results: results.data
            })
        })
    }
    handleSave = id => {
        const target = this.state.results.find(book => book.id === id);
        API.saveBook({
            title: target.volumeInfo.title,
            author: target.volumeInfo.authors,
            description: target.volumeInfo.description,
            image: target.volumeInfo.imageLinks.smallThumbnail,
            link: target.volumeInfo.infoLink
        })
        alert("Book was saved!")
    }

    render(){
        return(
            <div>
            {console.log(this.state.results)}
            <div className="row">
                <div className="col text-center">
            <img id="books" alt="book-banner" src="https://anshulsinha01.files.wordpress.com/2016/03/book-library-header-2109a.jpg"/>
            </div>
            </div>
            <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} search={this.state.search}/>
            <Results results={this.state.results} handleSave={this.handleSave}/>
            </div>
        )
    }
}

export default SearchPage;