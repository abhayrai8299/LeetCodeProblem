const arr=[1,2,3,4,5];
const searchNum=0;
let flag=false;
for(let i=0;i<arr.length;i++)
{
     if(arr[i]==searchNum){
          console.log(i);
          flag=true;
          break;
        }
}
if(flag==false)
{
        console.log(-1);
}