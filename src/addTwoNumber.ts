var addTwoNumbers = function (l1: number[], l2: number[]) {
	const firstNumber: string = l1.reverse().join("");
	const secondNumber: string = l2.reverse().join("");
	const result: number = Number(firstNumber) * Number(secondNumber);

	return result.toString().split("").reverse();
};

console.log(addTwoNumbers([1, 2, 3, 4], [1, 2]));
