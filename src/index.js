/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  	
  	var len = 0, amount = 0;
  	var first, second, third;
  	while (len < preferences.length) {

			first = preferences[len];
			second = preferences[first - 1];
			third = preferences[second - 1];

			if (preferences[third - 1] === first && first != second) {
				amount++;
				preferences[first - 1] = -0;
				preferences[second - 1] = -0;
				preferences[second - 1] = -0;
			}
			len++;
		}
	return (amount);
};
