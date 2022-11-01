
class myClass{
    myFun(name){
        console.log(name);
    }
    myFun1(){
        console.log("I am from 1 function inside class");
    }
    myFun2(){
        console.log("I am from 2 function inside class");
    }
    myFun3(){
        console.log("I am from 3 function inside class");
    }
}

var obj= new myClass;
obj .myFun("I am fun");
obj .myFun2();
// obj .myFun3();

