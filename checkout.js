// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


var showamount11=document.getElementById("wallet")
    showamount11.innerText=localStorage.getItem("amount")
   var div=document.createElement(div);

    var name=document.createElement("p")
    name.innerText=localStorage.getItem("name")
    var image=document.createElement("img")
    image.src=localStorage.getItem("image")
    div.append(name,image)
    var box=document.getElementById("movie")
    box.append(div)
