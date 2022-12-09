function selfNumber () {
    let numArr = [];
    for (let i = 1 ; i <= 10000 ; i++) {
        let num = i;
        let stringNumber = String(i);
        for (let j = 0 ; j < stringNumber.length ; j++) {
            num += parseInt(stringNumber[j]);
        }
        numArr.push(num);
    }

    let resultArr = [];
    for (let i = 1 ; i <= 10000 ; i++) {
        let index = numArr.indexOf(i);

        if (index === -1) {
            resultArr.push(i);
        }
    }

    console.log(resultArr.join('\n'));
};

selfNumber();