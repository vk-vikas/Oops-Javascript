// Factory function method
function Man(name,age) {
    return {
        name,
        age,
        talk: function (){
            console.log('My name is '+name);
        }
    }
}

// Constructor method (there is no diff ,either way can be used)
function Man2(name,age){
    this.name = name;
    this.age=age;
    this.talk = function (){
        console.log('My name is '+this.name);
    }
    // the new operator creates an empty obj
    // then the this keyword here attaches these propeties
    // to that obj and this fn return that obj, there is 
    // no explicit return statement here ,it happens automatically
}

const m1 = Man('vikas',23);
console.log(m1);
m1.talk();


const m2 = new Man2('bush',18);
console.log(m2);
m2.talk();