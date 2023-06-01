const counter = {};
const counterFormObject = new Object();
const counterFormCreate = Object.create(null);
const counterFormAssign = Object.assign({}, {});

function CreateCounter(...args) {
	if(args.length) {
		for (let item of args) {

			this[item] = item;
		}
	} else {

		return {};
	}
}
const counterFormConstructor = new CreateCounter();

class Counter {
	constructor() {}
}

const counterFormClass = new Counter();


const copyCounter = Object.create(counter)
const copyCounterFormAssign = Object.assign({}, counter)
const copyCounterFormSpread = { ...counter }
const copyCounterFormJSON = JSON.parse(JSON.stringify(counter));
const copyCounterFormStrClone = structuredClone(counter);

function makeCounter() {};
const makeCounterFormArrow = () => {};
const makeCounterFormFE = function makeCounter3() {};


//***Bonus */
//1
const obj1 = { here: { is: "on", other: "3" }, object: counter };

const obj2 = { here: { is: "on", other: "2" }, object: copyCounter };

const deepEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);


//2
const reverseStr = (str) => str.split('').reverse().join('');

