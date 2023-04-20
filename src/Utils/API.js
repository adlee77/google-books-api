import axios from "axios";
const functions = {
    getGoogleBooks: function(title){
        return axios.get("https://google-books-api.onrender.com/api/googlebooks/" + title)
    },
    saveBook: function(bookData){
        return axios.post("https://google-books-api.onrender.com/api/books", bookData)
    },
    getSavedBooks: function(){
        return axios.get("https://google-books-api.onrender.com/api/books")
    },
    deleteSavedBook: function(bookId){
        return axios.delete("https://google-books-api.onrender.com/api/books/" + bookId)
    }
}

export default functions;