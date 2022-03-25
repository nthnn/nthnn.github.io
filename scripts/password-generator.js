const opts = {
	numbers: true,
	uppercases: true,
	lowercases: true,
	symbols: true,
	similars: false
};

const numbers = '1234567890', upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', lowerCases = 'abcdefghijklmnopqrstuvwxyz', symbols = '!?#$%&*+-=';
const numbersNoSimilar = '2345679', upperCasesNoSimilar = 'ACDEFGHJKLMNPRSTUVWXYZ', lowerCasesNoSimilar = 'abcdefghijkmnopqrstuvwxyz', symbolsNoSimilar = '?#$%&*+-=';
const NUMBER_OF_PASSWORDS_TO_GENERATE = 3, PASSWORD_LENGTH = 12;
let charPool = numbers + upperCases + lowerCases + symbols;

$('#numbers').change(function() {
	opts.numbers = this.checked;
	updateCharPool();
});

$('#uppercases').change(function() {
	opts.uppercases = this.checked;
	updateCharPool();
});

$('#lowercases').change(function() {
	opts.lowercases = this.checked;
	updateCharPool();
});

$('#symbols').change(function () {
	opts.symbols = this.checked;
	updateCharPool();
});

$('#similars').change(function () {
	opts.similars = this.checked;
	updateCharPool();
});

$('#submit-btn').click(generatesRandomPasswords);

function generatesRandomPasswords() {
	const randomPasswords = [];

	for(let i = 0; i < NUMBER_OF_PASSWORDS_TO_GENERATE; i++)
		randomPasswords.push(Array(PASSWORD_LENGTH).fill(charPool).map(x => x[Math.floor(Math.random() * x.length)]).join(''));
	showResults(randomPasswords);
}

function updateCharPool() {
	charPool = '';

	if(opts.similars) {
		if(opts.numbers) charPool += numbersNoSimilar;
		if(opts.uppercases) charPool += upperCasesNoSimilar;
		if(opts.lowercases) charPool += lowerCasesNoSimilar;
		if(opts.symbols) charPool += symbolsNoSimilar;
	}
	else {
		if(opts.numbers) charPool += numbers;
		if(opts.uppercases) charPool += upperCases;
		if(opts.lowercases) charPool += lowerCases;
		if(opts.symbols) charPool += symbols;
	}
}

function showResults(randomPasswords) {
	$('#password-1').val(randomPasswords[0])
	$('#password-2').val(randomPasswords[1]);
	$('#password-3').val(randomPasswords[2]);
}

function copyPassword(password) {
	var element = "#" + password;	

	$(element).removeAttr("disabled");
	$(element).select();
	document.execCommand("copy");
	document.getSelection().removeAllRanges();
	$(element).attr("disabled", "");
}