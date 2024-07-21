var word="this is swasthik".split(" ")
var rev=" "
for(var i=word.length-1;i>=0;i--)
{
    rev=rev+word[i]+" "
}
console.log(rev)