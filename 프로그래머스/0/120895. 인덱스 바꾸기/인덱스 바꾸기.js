function solution(my_string, num1, num2) {
    var answer = '';
    var change = [];
    change = my_string.split('');
    change[num1]=my_string.charAt(num2);
    change[num2]=my_string.charAt(num1);
    
    for (let i=0; i<change.length; i++){
        answer += change[i];
    }
    return answer;
}