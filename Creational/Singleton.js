const instance1 = {
    name: 'singleton',
};

const instance2 = {
    name: 'singleton',
};

instance1 === instance2; // false
// {} === {} // false


// -- 
class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }

        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount() {
        return instance.count;
    }

    increaseCount() {
        return instance.count++;
    }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount2.increaseCount(); //2
// -- -- -- --

// --
class Database {
    constructor(config) {
        if (Database.exists) {
            return Database.instance;
        }

        Database.inctance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}
// -- -- -- --