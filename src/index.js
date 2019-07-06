module.exports = function check(str, bracketsConfig) {
    // // your solution
    var stack = new Stack();
    for (var currentBracket in str) {
		var prevBracket = stack.getLastElement();
		if (isCouple(prevBracket, currentBracket, bracketsConfig))
			stack.pop();
        else
            stack.push(currentBracket);
    }

    return stack.length() === 0;
}
