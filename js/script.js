  //NANOPOOL
  var ethAddressInputBox = document.getElementById('ethAddressInput');
    ethAddressInputButton.addEventListener('click', function(){
    var ethAddressInput = ethAddressInputBox.value;
    localStorage.setItem('ethAddress' , ethAddressInput);
  });
  //Show Prices
  var cryptosInputBox = document.getElementById('selectCryptos');
  var cryptosInputButton = document.getElementById('selectCryptosButton');

   var startUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=';
   var cryptos = [];
  var endUrl = '&tsyms=BTC,USD,EUR';
   //Add input to cryptos array when submit is clicked
     cryptosInputButton.addEventListener('click',function(){
       //Get what is in cryptosInputBox
       var cryptosInputBoxValue = cryptosInputBox.value;
       //Push its final value to the end of the cryptos array
       cryptos.push(cryptosInputBoxValue);
       console.log(cryptos);
       localStorage.setItem('cryptos',JSON.stringify(cryptos));
       //var cryptosPost = startUrl +  + endUrl;
     });

     var lsCryptos = localStorage.getItem('cryptos');
     console.log(lsCryptos);
     var cryptosPost = startUrl + JSON.parse(lsCryptos) + endUrl;
     localStorage.setItem('cryptosPost',cryptosPost);
     function display(){
     var final = localStorage.getItem('cryptosPost');




    $.post(final, function(cryptoPrices) {
      console.log(cryptoPrices)
       $("div.right-side").html(JSON.stringify(cryptoPrices));
    });
};
