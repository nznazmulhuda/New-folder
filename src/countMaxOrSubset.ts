function countMaxOrSubsets(nums: number[]): number {
	let maxOr: number = 0;
	let count: number = 0;

	for (let num of nums) {
		maxOr |= num;
	}

	function backtrack(index: number, currentOr: number): void {
		if (index === nums.length) {
			if (currentOr === maxOr) {
				count++;
			}
			return;
		}

		backtrack(index + 1, currentOr | nums[index]);

		backtrack(index + 1, currentOr);
	}

	backtrack(0, 0);

	return count;
}

console.log(countMaxOrSubsets([3, 2, 1, 5]));
