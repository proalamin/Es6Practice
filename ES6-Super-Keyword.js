class parent {
    hello1(params) {
        console.log('1')
    }
    hello2(params) {
        console.log('2')
    }

}

class child extends parent {
    demo() {
        super.hello1();
        super.hello2();
    }
}

var obj= new child();
obj.demo();