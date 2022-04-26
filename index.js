


// Store the wallet amount to your local storage with key "amount"
//var totalamount =JSON.parse(localStorage.getItem("amount"))||[];
function totalamount(amount){

    this.amount=amount
}

function add_to_wallet(){
   
   let amount=document.getElementById("amount").value;
   console.log(amount);
   
   let show=document.getElementById("wallet");
   let v = +(show.textContent);
   show.innerText=+amount+v;
  // totalamount.push(amount)
   localStorage.setItem("amount",amount)
   
   
}
