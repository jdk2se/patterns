// Abstract foctory
function bmwProducer(kind) {
	return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
	return new Z4();
}

function familyCarFactory() {
	return new I3();
}

class Z4 {
	info () {
		return 'Z4 is sport car';
	}
}

class I3 {
	info() {
		return 'I3 is family car';
	}
}


// Initializing Abstract factory of sport cart
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = new produce();
