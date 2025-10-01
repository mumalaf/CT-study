function solution(my_string) {
    var answer = '';
    var temp = [];
    temp=(my_string.toLowerCase()).split('');
    temp.sort();
    
    for (let i=0; i<temp.length; i++){
        answer += temp[i];
    }
    return answer;
}