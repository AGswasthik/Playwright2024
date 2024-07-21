var x="sws1";
var y="";
for(let i=x.length-1;i>=0;i--)
{
    console.log(x[i])
    y+=x[i]
}
console.log("y is "+y)
if(x==y)
{
    console.log("palindrome")
}
else
{
    console.log("not palindrome")
}