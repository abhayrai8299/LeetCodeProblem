let num=[1,2,3,4,5,6,7];
let k=3;
let nlen=num.length;
while(k>0){
    let temp=num[nlen-1];
    for(let i=nlen-1;i>0;--i)
    {
        num[i]=num[i-1];
    }
    num[0]=temp;
    --k;
}

console.log(num); //[5,6,7,1,2,3,4]