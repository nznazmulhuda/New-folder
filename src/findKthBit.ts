function findKthBit(n: number, k: number): string {
	if (n === 1) {
		return "0";
	}

	const length = (1 << n) - 1;
	const mid = Math.floor(length / 2) + 1;

	if (k === mid) {
		return "1";
	} else if (k < mid) {
		return findKthBit(n - 1, k);
	} else {
		const mirroredPos = length - k + 1;
		const bit = findKthBit(n - 1, mirroredPos);
		return bit === "0" ? "1" : "0";
	}
}
