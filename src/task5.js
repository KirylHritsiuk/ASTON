/**
 * 1) Часто встречающиеся: Сортировка выбором, быстрая сортировка, сорнтировка слиянием, сортировка вставками
 *    блочная сортировка, пузырьковая сортировка.
 *    Сортировка Шелла, сортировка подсчётом, сортировка расчёской, пирамидальная сортировка,
 *    сортировка перемешиванием, гномья сортировка, естественная сортировка строк.
*/

//--------------------- 3 ----------------------------

const Person = {
	sayHi() {
		console.log('Hi');
	}
};

const PersonCreate = Object.create({
	sayHi() {
		console.log('Hi');
	}
});

const Person2 = Object.assign({}, Person);

Person.sayHi();
PersonCreate.sayHi();
Person2.sayHi();

Object.prototype.logInfo = function() {
  console.log('log Info');
};

Person.logInfo();
PersonCreate.logInfo();
Person2.logInfo();

//--------------------- 4 ----------------------------

class PersonThree {
	constructor(name) {
		this.name = name;
	}

	set name(value) { 
		this._name = value;
		console.log('Hi', value);
	}

	get name() { 
		return this._name;
	}
}
  
const newPerson = new PersonThree('Coco');


class Man extends PersonThree {
	constructor(name) {
		super(name);
	}

	showPower() {
		console.log('Arrrr');
	}
}
  
const man = new Man('Guro');

man.showPower();

//--------------------Bonus---------------------------
//--------------------- 1 ----------------------------
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const total = 13; 

const firstSum = (arr, total) => { 
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 1; j < arr.length; j++) {
		  if ((arr[i] + arr[j]) == total) {
			return [arr[i], arr[j]]
		  }
		}
	  } 
	return [];
}

firstSum(arr,total)//result = [4, 9]

//--------------------- 2 ----------------------------
// квадратичная сложность
