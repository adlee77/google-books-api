import axios from "axios";
const functions = {
    getGoogleBooks: function(title){
        return axios.get("http://localhost:3001/api/googlebooks/" + title)
    },
    saveBook: function(bookData){
        return axios.post("http://localhost:3001/api/books", bookData)
    },
    getSavedBooks: function(){
        return axios.get("http://localhost:3001/api/books")
    },
    deleteSavedBook: function(bookId){
        return axios.delete("http://localhost:3001/api/books/" + bookId)
    }
}

export default functions;