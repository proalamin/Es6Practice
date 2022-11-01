var mySet= new Set();

mySet.add('Ban');
mySet.add('Ind');
mySet.add('napal');
mySet.add('Us');
mySet.add('Uk');
mySet.add('Uk');

// mySet.clear(); // set clear 
// mySet.delete("Ind") // set delete
// console.log(mySet.size); // set size 
// console.log(mySet.values()); // set values

if(mySet.has("Ind")){ // set has
    console.log('oh, Ind found')
}else{
    console.log('Ops, Ind not found')
}