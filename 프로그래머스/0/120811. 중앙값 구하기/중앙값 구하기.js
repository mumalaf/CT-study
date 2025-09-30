function solution(array) {
    var answer = 0;
    array.sort((a,b)=>a-b);
    answer=array[Math.round((array.length)/2)-1];
    return answer;
}