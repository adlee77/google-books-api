import axios from "axios";
export default{
    getGoogleBooks: function(title){
        return axios.get("/api/googlebooks/" + title)
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData)
    },
    getSavedBooks: function(){
        return axios.get("/api/books")
    }
}