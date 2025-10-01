function solution(array) {
    var answer = [];
    var temp = [];
    temp = [...array];
    temp.sort((a,b)=>a-b);
    answer.push(temp[temp.length-1]);
    
    for (let i=0; i<array.length; i++){
        if(array[i]==temp[temp.length-1]){
            answer.push(i);
        }
    }
    return answer;
}