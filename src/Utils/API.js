import axios from "axios";
const functions = {
    getGoogleBooks: function(title){
        return axios.get("/api/googlebooks/" + title)
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData)
    },
    getSavedBooks: function(){
        return axios.get("/api/books")
    },
    deleteSavedBook: function(bookId){
        return axios.delete("/api/books/" + bookId)
    }
}

export default functions;
