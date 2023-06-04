/**
 * В JavaScript, Массив – это особый подвид объектов, так же массив имеют переменную длину.  
 * JavaScript-массивы, совмещают в себе несколько структур данных это сам массив и из-за работы с памятью - список.
 * Производные от массива - стэк, очередь.
 * 
 * 
 * 
 * 
*/

function logger() { 
	console.log(`I output only external context: ${this.item}`); 
};
const obj = { 
	item: "some value" 
};

logger.call(obj);
logger.bind(obj)();
logger.apply(obj);

function bindPolyfill(func, context){

	return function(...args) {
		return func.apply(
					context,
					args
				);
	}
}