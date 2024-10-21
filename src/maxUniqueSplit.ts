function maxUniqueSplit(s: string): number {
	function backtrack(start: number, seen: Set<string>): number {
		// if we reach the end of the string, return 0 as no more substrings can be formed
		if (start === s.length) return 0;

		let maxSplits = 0;
		// try all possible substrings starting from 'start' and ending at 'end'
		for (let end = start + 1; end <= s.length; end++) {
			const substring = s.slice(start, end);
			// if the substring is not already in the set, add it and recurse further
			if (!seen.has(substring)) {
				seen.add(substring);
				// recursively find the maximum splits after adding this substring
				maxSplits = Math.max(maxSplits, 1 + backtrack(end, seen));
				// remove the substring to try other combinations
				seen.delete(substring);
			}
		}
		return maxSplits;
	}

	// start the backtracking with an empty set of seen substrings
	return backtrack(0, new Set());
}
