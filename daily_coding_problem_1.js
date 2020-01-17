const sumTwoEqualsConstantK = (arr) => {
    const K = 17;
    L = arr.length;

    for(let i = 0; i < L; i++) {
        for(let j = i + 1; j < L; j++) {
            if(arr[i] + arr[j] === K) {
                return true;
            }
        }
    }
    return false;
}


const soln = sumTwoEqualsConstantK([10,15,3,7]);
console.log(soln);