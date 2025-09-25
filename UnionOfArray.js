const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [2,3,4,4,5,11,12];
const arr=[];
const arr1len=arr1.length;
const arr2len=arr2.length;
let j=0;

for(let i=0;i<arr1len;i33333333++)
{       
        if(j<=arr2len){
                if(arr1[i]<arr2[j])
                        {
                            arr.push(arr1[i]);
                        }
                        else 
                        {
                                arr.push(arr2[j++]);
                        }
        } else {
                arr.push(arr1);
        }
        
}
console.log(arr);