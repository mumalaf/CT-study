function solution(numbers, num1, num2) {
    var answer = [];
    var temp = [];
    temp = numbers.slice(num1,num2+1);
    for(let i=0; i<temp.length; i++){
        answer.push(temp[i]);
    }
    return answer;
}