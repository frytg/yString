/*

	yString

	GIT			https://github.com/frytg/yString

	DEBUG		-> README.md

	AUTHOR		Daniel Freytag
				daniel@frytg.com
				https://twitter.com/FRYTG

	UPDATED		October 2018

*/

const yString = {
	onlyWords: function(str) {
		if(str == null) { return str; }

		return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '');
	},

	lowerCase: function(str) {
		if(str == null) { return str; }

		return str.toLowerCase();
	},

	upperCase: function(str) {
		if(str == null) { return str; }

		return str.toUpperCase();
	},

	camelCase: function(str) {
		if(str == null) { return str; }

		str = yString.onlyWords(str);
		str = yString.lowerCase(str)
			.replace(/\-/g, ' ') //convert all hyphens to spaces
			.replace(/\s[a-z]/g, yString.upperCase) //convert first char of each word to UPPERCASE
			.replace(/\s+/g, '') //remove spaces
			.replace(/^[A-Z]/g, yString.lowerCase); //convert first char to lowercase
		return str;
	},

	stripWhitespace: function(str) {
		if(str == null) { return str; }

		return str.replace(/\s+/g, '');
	},

	lc: function(str) {
		if(str == null) { return str; }

		return yString.lowerCase(str);
	},

	uc: function(str) {
		if(str == null) { return str; }
		
		return yString.upperCase(str);
	}
};


module.exports = yString;
