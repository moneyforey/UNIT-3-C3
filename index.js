// Store the wallet amount to your local storage with key "amount"
 var w = JSON.parse(localStorage.getItem("amount"));
 
 
function addAmount(){
    var amount = document.querySelector("#amount").value;
    
   
   var sum =Number(w) + Number(amount);
    

    localStorage.setItem("amount", JSON.stringify(sum));
   
}
 var wallet = document.querySelector("#wallet")

 wallet.innerText = w;
