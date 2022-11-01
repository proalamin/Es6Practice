class parent {
    hello1(params){
        console.log('1')
    }
    hello2(params){
        console.log('2')
    }

}

class child extends parent{
    hello1(params) {
        console.log('1 to 1')
    }
}


var obj = new child;
// var obj = new parent;
obj.hello1();
obj.hello2();