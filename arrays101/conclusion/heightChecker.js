/**
 * @param {number[]} heights
 * @return {number}
 */

/** Школа пытается ежегодно фотографировать всех учеников.
 *  Учащимся предлагается встать в один ряд в порядке неубывания роста.
 *  Пусть этот порядок представлен массивом целых чисел,
 *  expected где expected[i]— ожидаемый рост ученика в очереди.ith

Вам дан целочисленный массив heights, представляющий текущий порядок, в котором стоят ученики.
Каждый из них heights[i] представляет собой рост ученика в очереди ( 0-индексированный ).ith

Возвращает количество индексов, где heights[i] != expected[i] 
**/
var heightChecker = function(heights) {
    const heightSorting = heights.slice().sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== heightSorting[i]) count++;
    }

    return count;
};

console.log(heightChecker([1,1,4,2,1,3])); // 3 // [1,1,1,2,3,4] Индексы 2, 4 и 5 не совпадают.
console.log(heightChecker([5,1,2,3,4])); // 5 // Все индексы не совпадают.
console.log(heightChecker([1,2,3,4,5])); // 0 // Все индексы совпадают.