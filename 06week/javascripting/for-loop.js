var total = 0;
var limit = 10;

function test(){
for(var i = 0; i < 10; i++){
total += i;
}
console.log(total);
return (total);
}

test();

//code looks correct but was told the answer was 45 instead of 10. 
//tried to change the var total to equal 35 so the answer would come to 45, but didnt work.
//still passed me on to the next level. 
