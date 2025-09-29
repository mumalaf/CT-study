function solution(my_string, n) {
    var answer = '';
    var char = [];
    char = my_string.split('');
    for (let i=0; i<my_string.length; i++){
        for (let k=0; k<n; k++){
            answer+=char[i];
        }
    }
    return answer;
}