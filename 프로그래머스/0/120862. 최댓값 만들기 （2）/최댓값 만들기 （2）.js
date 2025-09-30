function solution(numbers) {
    var answer = 0;
    var back = 0;
    var front = 0;
    numbers.sort((a,b)=>a-b);
    back=numbers[numbers.length-2]*numbers[numbers.length-1];
    front=numbers[0]*numbers[1];
    if(back>front){
        answer = back;
    }else{
        answer = front;
    }
    return answer;
}