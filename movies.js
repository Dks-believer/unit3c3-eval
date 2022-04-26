// // Implement debouncing for network request
// // On clicking book now store the selected movie in localstorage as key "movie"
// // so that you can retrive it on checkout.html page

// let movies_div=document.getElementById("movies");

// let id;
// async function searchMovies(){
//     // https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om
// try{
// const query = document.getElementById("search").value;
 
// const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`);

// const data=await res.json();
// const movies=data.Search
// // appendMovies(movies)
// console.log("data:",data)
// return movies;

// }
//  catch(err){
//     console.log("err:",err);
// }
// }
// function appendMovies(data){
   
//     movies_div.innerHTML=null
//     data.forEach (function(el){
//    let p=document.createElement("p");
//    p.innerText=el.Title;
//    movies_div.append(p);
//     });
// }

// //we willasseble searchmovies and append movies in one func
// async function main(){
//     let data=await searchMovies();
//     if(data==undefined){
//         return false;
//     }
//     appendMovies(data);

// }
// function debounce(func,delay){
//     if(id){
//         clearTimeout(id);
//     }

//     id=setTimeout(function(){
//         func();
//     },delay);
// }

// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//let movies= document.getElementById("movies");
//movies=document.getElementById("movies");
//var cartData =JSON.parse(localStorage.getItem("cart"))||[];
//console.log(cartData);
var showamount11=document.getElementById("wallet")
    showamount11.innerText=localStorage.getItem("amount")
function Search(){
   
    
    const search=document.getElementById("search").value;
    const url=`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`
    fetch(url)
    .then(function(res){
      return res.json();
    })
    .then(function(res){
       append(res);
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })

   
    





}
function append(data){
let movies=document.getElementById("movies");
let div=document.createElement("div")
var c=data.Search

for(var i=0;i<c.legth;i++)

movies.innerHTML=null;
let name=document.createElement("p");
name.innerText=`Movies:-${data.Search[i].Title}`
let image=document.createElement("img");
image.src=data.Search[i].Poster;

 var button=document.createElement("button")
 button.innerText="Book Movies"
 button.addEventListener("click",function(){
     localStorage.setItem("name",data.Search[0].Title)
     localStorage.setItem("image",data.Search[0].Poster)
     //addToCart(data);
     alert("add movies")

     
 })
 div.append(name,image,button)
movies.append(div)
 // function addToCart(data){
   //  cartData.push(data)
   //  localStorage.setItem("cart",JSON.stringify(cartData));
     
    
   
 }
