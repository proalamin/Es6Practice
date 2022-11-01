var myMap = new Map();

myMap.set("key1", "Bangladesh");
myMap.set("key2", "India");
myMap.set("key3", "Sri");
myMap.set("key4", "Vutan");
myMap.set("key5", "Pak");
myMap.set("key6", "Us");
myMap.set("key7", "Turkey");

// console.log(myMap.values());
// console.log(myMap.keys());

// myMap.delete("key1");  // es6 delete
// myMap.delete("key2");

// myMap.clear(); // es6 clear

// console.log(myMap.get("key6")); // es6 get

// console.log(myMap.has('key1')); // es6 has
if(myMap.has("key1")){ // es6 has
    console.log('yes')
}else{
    'Ops , no'
}


for(let myvalue of myMap.values()){

    // console.log(myvalue);
}


