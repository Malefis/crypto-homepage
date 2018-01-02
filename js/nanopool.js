// $(document).ready(function() {
//   balances.ethBalance();
// });
//var balances = {
  //ethBalance: function(){
  $(document).ready(function(){
  var ethUrl = 'https://api.nanopool.org/v1/eth/balance/'
  var ethAddress = localStorage.getItem("ethAddress");
  var ethGet = ethUrl + ethAddress
  $.get(ethGet, function(balance) {
     $("div.nanopool-balance").html('Your balance is: ' +  balance.data + ' ETH');
   });
 //},
//}
});
