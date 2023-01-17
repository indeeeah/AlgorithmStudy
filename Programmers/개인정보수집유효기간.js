function solution(today, terms, privacies) {
    var answer = [];
    
    today = new Date(today).getTime();
        
    for (let i = 0 ; i < privacies.length ; i++) {
        let array = privacies[i].split(' ');
        let reg = `/${array[1]}/`;
        
        let filter = terms.filter((element) => {
            element = element.split(' ');
            return reg.search(element[0]) > -1;
        });
        
        let month = parseInt(filter[0].split(' ')[1]);
        let arrayMonth = new Date(array[0]).getMonth();
        let date = new Date(array[0]).setMonth(arrayMonth + month);
        
        if (today >= date) {
            answer.push(i + 1);
        }
    }
        
    return answer;
}