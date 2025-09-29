function solution(my_string) {
    var answer = '';
    var minus = ['a','e','i','o','u'];
    for (let i=0; i<minus.length; i++){
        my_string=my_string.replaceAll(minus[i],'');
    }
    answer = my_string;
    
    return answer;
}