'use strict';

const cryptoKittiesAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";
let cryptokittyClass;

class Cryptokitty {
	#contract;
	#kitties;
    constructor( contract ) {
        this.contract = contract;
        this.kitties = [];
    }
	getKitty(id) {
		let self = this;
		this.contract.methods.getKitty(id).call()
		.then(function(kitty) {
			self.kitties.push(kitty);
			showKitty(id, kitty);
			$('#result').html('Yeah! You found a kitty!!!:)');
		})
		.catch(function(error) {
			console.log(error);
			$('#result').html('Sorry.. You could not find a kitty;(');
		})
	}
}

$(function() {
	const contract = initKittyContract();
	cryptokittyClass = new Cryptokitty(contract);
	$('#kitty_button').on('click', getKitty);
	getEtherPrice();
	window.setInterval(getEtherPrice, 10000);
})

function initKittyContract() {
	let web3js = new Web3();
	if (typeof web3 !== 'undefined') {
		web3js.setProvider(web3.currentProvider);
	}
	return new web3js.eth.Contract(cryptoKittiesABI, cryptoKittiesAddress);;
}

function getKitty(e) {
	let id = $('#kitty_id').val();
	cryptokittyClass.getKitty(id);
	
}

function showKitty(id, p) {
	let cryptokittyItem = $('<div class="cryptokitty col-lg-4 col-sm-6 col-12"></div>').prependTo($('#cryptoKitties-show'));
	let cryptokittyInfo = $('<div class="cryptokitty-info"></div>').appendTo($(cryptokittyItem));
	$('<img src="https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/' + id + '.svg">').appendTo($(cryptokittyInfo));
	let ul = $('<ul></ul>').appendTo($(cryptokittyInfo));
	let d = new Date(Number(p.birthTime)*1000);
	$('<li>ID: ' + id + '</li>').appendTo($(ul));
	$('<li>Birthday: ' + d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear() + '</li>').appendTo($(ul));
	$('<li>Generation: ' + p.generation + '</li>').appendTo($(ul));
	$('<li>Father ID: ' + p.sireId + '</li>').appendTo($(ul));
	$('<li>Nother ID: ' + p.matronId + '</li>').appendTo($(ul));
}


function getEtherPrice() {
	let pricePromise = new Promise((resolve, reject) => {
		$.ajax({
			url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR,CAD',
			type: 'GET',
			success: function(data) {
				resolve(data)
			},
			error: function(error) {
				reject(error)
			},
		})
	});
	pricePromise.then((result) => {
		$('#price_cad').text(result.CAD);
		$('#price_usd').text(result.USD);
		$('#price_jpy').text(result.JPY);
	});
}