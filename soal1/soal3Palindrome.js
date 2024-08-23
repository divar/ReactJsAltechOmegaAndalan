function palindrome (text) {
	let t = text.toLowerCase().replace(/\s/g, "");
	console.log(t === t.split('').reverse().join('') ? "true":"false");
}


const input = process.argv[2];
palindrome(input);