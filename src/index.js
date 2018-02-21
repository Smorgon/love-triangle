/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    for (let i = 0; i < preferences.length; i++) {
        let first = i + 1;
        let second = preferences[first - 1];
        if (second <= first) {
            continue;
        }

        let third = preferences[second - 1];
        if (third <= first) {
            continue;
        }

        if (first === preferences[third - 1]) {
            count++;
        }

        //This is other variant, but I think that the first variant of code more readable
        /*if (preferences[i] <= i + 1) {
            continue;
        }
        if (preferences[preferences[i] - 1] <= i + 1) {
            continue;
        }
        if (i + 1 === preferences[preferences[preferences[i] - 1] - 1]) {
            count++;
        }*/
    }
    return count;
};
