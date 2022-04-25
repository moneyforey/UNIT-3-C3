// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var container = document.querySelector("#movies")
var w = JSON.parse(localStorage.getItem("amount"));
var wallet = document.querySelector("#wallet");
wallet.innerText = w;

async function searchMovies(){
    try{
        const search = document.querySelector("#search").value;
        let res = await fetch(`http://www.omdbapi.com/?apikey=c54fc110&s=${search}`)

        let  data = await res.json();
        myMovies = data.Search
        console.log(myMovies);
        appendMovies(myMovies);
    }
    catch(err){
        console.log(err);
    }
}

function appendMovies(data){

data.map(function(el,ind){
       let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.Poster;
        
        let name = document.createElement("p");
        name.innerText = el.Title;

        let book = document.createElement("button");
        book.setAttribute("class", "book_now")
        book.innerText = "Book NoW"
        book.addEventListener("click", function(el,ind){
            
        })
        div.append(image,name,book);
        container.append(div);
     });
}

