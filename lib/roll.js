export function roll(sides, die, times_rolled) {
	let results = [];
	for (let i = 0; i < times_rolled; i++) {
		for (let j = 0; j < die; j++) {
			results.push(Math.floor(Math.random() * (sides-1+1) + 1));
		}
	}
	return {"sides": sides, "die": die, "rolls": times_rolled, "results": results};
}
