/**
 *
 * @param {String} str
 * @param {String} ending
 */
function solution(str, ending) {

    return ending.length === 0 || str.slice(-ending.length) === ending;
}
solution('abcde', 'cde');
