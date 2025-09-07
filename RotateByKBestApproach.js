let num=[1,2,3,4,5,6,7];
let k=3;
let nlen=num.length;
let j=0;
for(let i=nlen-1;i>=0;--i)
{

        if(j<k)
        {
                num[i]=num[i-1];
        }
        num[0]=num[]
}

console.log(num); //[5,6,7,1,2,3,4]