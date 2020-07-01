import React, { Component } from "react";
import SearchBar from "../Components/SearchBar";
import Results from "../Components/Results";
import API from "../Utils/API";

class SearchPage extends Component{
    state = {
        results: [],
        search: "",
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit = () => {
        API.getGoogleBooks(this.state.search).then((results)=>{
            this.setState({
                results: results.data
            })
        })
    }
    handleSave = id => {
        console.log("this is handlesave")
        const target = this.state.results.find(book => book.id === id);
        API.saveBook({
            title: target.volumeInfo.title,
            author: target.volumeInfo.authors,
            description: target.volumeInfo.description,
            image: target.volumeInfo.imageLinks.smallThumbnail,
            link: target.volumeInfo.infoLink
        })
    }

    render(){
        return(
            <>
            {console.log(this.state.results)}
            <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} search={this.state.search}/>
            <Results results={this.state.results} handleSave={this.handleSave}/>
            </>
        )
    }
}

export default SearchPage;