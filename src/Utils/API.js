import axios from "axios";
export default{
    getGoogleBooks: function(title){
        return axios.get("http://localhost:3000/api/googlebooks/" + title)
    },
    saveBook: function(bookData){
        return axios.post("http://localhost:3000/api/books", bookData)
    },
    getSavedBooks: function(){
        return axios.get("/api/books")
    },
    deleteSavedBook: function(bookId){
        return axios.delete("/api/books/" + bookId)
    }
}