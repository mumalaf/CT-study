function solution(n, s) {
    var answer = [];
    if (s<n){
        answer = [-1];
    }else{
        var base = Math.floor(s/n);
        const last = s % n;
        
        for (let i = 0; i < n; i++){
            answer.push(base);
        }
        
        for (let i = 0; i < last; i++){
            answer[n - 1 - i]++;
        }
    }
    return answer;
}