let a=1;
let b=2;
let c=3;
function so(a,b,c){
    let number = [a,b,c];
    let kq =[]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                if(i!=j && j!=k && i!=k){
                    kq.push(Number(i.toString()+j.toString()+k.toString()))
                }
            }
        }

    }
    return kq;
}
console.log(so())