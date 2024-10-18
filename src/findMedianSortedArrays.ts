var findMedianSortedArrays = function (
	nums1: number[],
	nums2: number[],
): number {
	const margedArray: number[] = nums1.concat(nums2);
	margedArray.sort((a, b) => a - b);

	if (margedArray.length % 2 !== 0) {
		// odd number
		const index: number = (margedArray.length + 1) / 2 - 1;
		return margedArray[index];
	}

	// even number
	const index1: number = margedArray.length / 2 - 1;
	const index2: number = index1 + 1;

	return (margedArray[index1] + margedArray[index2]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));
