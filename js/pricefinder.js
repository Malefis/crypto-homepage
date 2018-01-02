var btcChoice = localStorage.getItem("BTC?");
var xrpChoice = localStorage.getItem("XRP?");
var ethChoice = localStorage.getItem("ETH?");
var bchChoice = localStorage.getItem("BCH?");
var ltcChoice = localStorage.getItem("LTC?");
var dashChoice = localStorage.getItem("DASH?");
var xemChoice = localStorage.getItem("XEM?");
var neoChoice = localStorage.getItem("NEO?");
var iotaChoice = localStorage.getItem("IOTA?");
var xmrChoice = localStorage.getItem("XMR?");
var adaChoice = localStorage.getItem("ADA?");
var xlmChoice = localStorage.getItem("XLM?");
var eosChoice = localStorage.getItem("EOS?");
var btgChoice = localStorage.getItem("BTG?");
var qtumChoice = localStorage.getItem("QTUM?");
var etcChoice = localStorage.getItem("ETC?");
var xrbChoice = localStorage.getItem("XRB?");
var trxChoice = localStorage.getItem("TRX?");
var lskChoice = localStorage.getItem("LSK?");
var xvgChoice = localStorage.getItem("XVG?");


//BTC
if (btcChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=,USD,EUR,GBP", function(btc) {
    $('.btc').html("<br>The current Bitcoin exchange rates are: <br>  $ USD = " + btc.USD + " <br>	£ GBP = " + btc.GBP + "<br>€ EUR = " + btc.EUR)
  });
}
//ETH
if (ethChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,GBP", function(eth) {
    $('.eth').html(" <br>The current Ethereum exchange rates are : <br>	₿ BTC = "+ eth.BTC + " <br> 	 $ USD= " + eth.USD + " <br>	£ GBP = " + eth.GBP+ "<br> € EUR = " + eth.EUR)
  })
}
//XRP
if (xrpChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=BTC,USD,EUR,GBP", function(xrp) {
    $('.xrp').html(" <br>The current Ripple exchange rates are : <br>	₿ BTC = "+ xrp.BTC + " <br> 	 $ USD= " + xrp.USD + " <br>	£ GBP = " + xrp.GBP+ "<br> € EUR = " + xrp.EUR)
  })
}
//BCH
if (bchChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=BTC,USD,EUR,GBP", function(bch) {
    $('.bch').html(" <br>The current Bitcoin Cash exchange rates are : <br>	₿ BTC = "+ bch.BTC + " <br> 	 $ USD= " + bch.USD + " <br>	£ GBP = " + bch.GBP+ "<br> € EUR = " + bch.EUR)
  })
}
//LTC
if (ltcChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=BTC,USD,EUR,GBP", function(ltc) {
    $('.ltc').html(" <br>The current Litecoin exchange rates are : <br>	₿ BTC = "+ ltc.BTC + " <br> 	 $ USD= " + ltc.USD + " <br>	£ GBP = " + ltc.GBP+ "<br> € EUR = " + ltc.EUR)
  })
}
//DASH
if (dashChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=BTC,USD,EUR,GBP", function(dash) {
    $('.dash').html(" <br>The current Dash exchange rates are : <br>	₿ BTC = "+ dash.BTC + " <br> 	 $ USD= " + dash.USD + " <br>	£ GBP = " + dash.GBP+ "<br> € EUR = " + dash.EUR)
  })
}
//XEM
if (xemChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XEM&tsyms=BTC,USD,EUR,GBP", function(xem) {
    $('.xem').html(" <br>The current NEM exchange rates are : <br>	₿ BTC = "+ xem.BTC + " <br> 	 $ USD= " + xem.USD + " <br>	£ GBP = " + xem.GBP+ "<br> € EUR = " + xem.EUR)
  })
}
//NEO
if (neoChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=BTC,USD,EUR,GBP", function(neo) {
    $('.neo').html(" <br>The current NEO exchange rates are : <br>	₿ BTC = "+ neo.BTC + " <br> 	 $ USD= " + neo.USD + " <br>	£ GBP = " + neo.GBP+ "<br> € EUR = " + neo.EUR)
  })
}
//IOTA
if (iotaChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=IOTA&tsyms=BTC,USD,EUR,GBP", function(iota) {
    $('.iota').html(" <br>The current IOTA exchange rates are : <br>	₿ BTC = "+ iota.BTC + " <br> 	 $ USD= " + iota.USD + " <br>	£ GBP = " + iota.GBP+ "<br> € EUR = " + iota.EUR)
  })
}
//XMR
if (xmrChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=BTC,USD,EUR,GBP", function(xmr) {
    $('.xmr').html(" <br>The current Monero exchange rates are : <br>	₿ BTC = "+ xmr.BTC + " <br> 	 $ USD= " + xmr.USD + " <br>	£ GBP = " + xmr.GBP+ "<br> € EUR = " + xmr.EUR)
  })
}
//ADA
if (adaChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=BTC,USD,EUR,GBP", function(ada) {
    $('.ada').html(" <br>The current Cardano exchange rates are : <br>	₿ BTC = "+ ada.BTC + " <br> 	 $ USD= " + ada.USD + " <br>	£ GBP = " + ada.GBP+ "<br> € EUR = " + ada.EUR)
  })
}//XLM
if (xlmChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=BTC,USD,EUR,GBP", function(xlm) {
    $('.xlm').html(" <br>The current Stellar exchange rates are : <br>	₿ BTC = "+ xlm.BTC + " <br> 	 $ USD= " + xlm.USD + " <br>	£ GBP = " + xlm.GBP+ "<br> € EUR = " + xlm.EUR)
  })
}//EOS
if (eosChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=EOS&tsyms=BTC,USD,EUR,GBP", function(eos) {
    $('.eos').html(" <br>The current EOS exchange rates are : <br>	₿ BTC = "+ eos.BTC + " <br> 	 $ USD= " + eos.USD + " <br>	£ GBP = " + eos.GBP+ "<br> € EUR = " + eos.EUR)
  })
}//BTG
if (btgChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=BTG&tsyms=BTC,USD,EUR,GBP", function(btg) {
    $('.btg').html(" <br>The current Bitcoin Gold exchange rates are : <br>	₿ BTC = "+ btg.BTC + " <br> 	 $ USD= " + btg.USD + " <br>	£ GBP = " + btg.GBP+ "<br> € EUR = " + btg.EUR)
  })
}//QTUM
if (qtumChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=QTUM&tsyms=BTC,USD,EUR,GBP", function(qtum) {
    $('.qtum').html(" <br>The current QTUM exchange rates are : <br>	₿ BTC = "+ qtum.BTC + " <br> 	 $ USD= " + qtum.USD + " <br>	£ GBP = " + qtum.GBP+ "<br> € EUR = " + qtum.EUR)
  })
}//ETC
if (etcChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=BTC,USD,EUR,GBP", function(etc) {
    $('.etc').html(" <br>The current Ethereum Classic exchange rates are : <br>	₿ BTC = "+ etc.BTC + " <br> 	 $ USD= " + etc.USD + " <br>	£ GBP = " + etc.GBP+ "<br> € EUR = " + etc.EUR)
  })
}//XRB
if (xrbChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XRB&tsyms=BTC,USD,EUR,GBP", function(xrb) {
    $('.xrb').html(" <br>The current Raiblocks exchange rates are : <br>	₿ BTC = "+ xrb.BTC + " <br> 	 $ USD= " + xrb.USD + " <br>	£ GBP = " + xrb.GBP+ "<br> € EUR = " + xrb.EUR)
  })
}//TRX
if (trxChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=BTC,USD,EUR,GBP", function(trx) {
    $('.trx').html(" <br>The current Tron exchange rates are : <br>	₿ BTC = "+ trx.BTC + " <br> 	 $ USD= " + trx.USD + " <br>	£ GBP = " + trx.GBP+ "<br> € EUR = " + trx.EUR)
  })
}//LSK
if (lskChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=LSK&tsyms=BTC,USD,EUR,GBP", function(lsk) {
    $('.lsk').html(" <br>The current Lisk exchange rates are : <br>	₿ BTC = "+ lsk.BTC + " <br> 	 $ USD= " + lsk.USD + " <br>	£ GBP = " + lsk.GBP+ "<br> € EUR = " + lsk.EUR)
  })
}//XVG
if (xvgChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XVG&tsyms=BTC,USD,EUR,GBP", function(xvg) {
    $('.xvg').html(" <br>The current Verge exchange rates are : <br>	₿ BTC = "+ xvg.BTC + " <br> 	 $ USD= " + xvg.USD + " <br>	£ GBP = " + xvg.GBP+ "<br> € EUR = " + xvg.EUR)
  })
}
