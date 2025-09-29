function solution(money) {
    var answer = [];
    var coffee = 0;
    coffee = Math.trunc(money/5500);
    answer.push(coffee);
    answer.push(money-coffee*5500);
    return answer;
}