class Bmw {
    constructor(model, price, maxSpeed) {
        this.model    = model;
        this.price    = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {
    create(type) {
        if (type === 'X5') 
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

const factory = new BmwFactory();

const X5 = factory.create('X5');
const X6 = factory.create('X6');

// -------------------------------------------------

class SimpeMembership {
    constructor(name) {
        this.name = name;
        this.const = 50;
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name;
        this.const = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.const = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpeMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);

        return member;
    }
}