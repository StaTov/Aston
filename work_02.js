////////////////////////////////////////////////////////////////
// Задание 1 – Создать объект counter всеми возможными способами;


const counter1 = { conut: 0, isObject: true } // литерал
/////////

function CounterMaker(count, isObject) {
    this.count = count
    this.isObject = isObject
}

const counter2 = new CounterMaker(0, true)  // функция-конструктор
////////

class Counter {
    constructor(count, isObject) {
        this.count = count
        this.isObject = isObject
    }
}

const counter3 = new Counter(0, true) // Класс
////////

const counter4 = Object.create({}, {
    count: {
        value: 0,
        writable: true,
        enumerable: true,
        configurable: true
    },
    isObject: {
        value: true,
        writable: true,
        enumerable: true,
        configurable: true
    }
})                                    // метод Object.create
/////////

const counter5 = Object.assign({}, { count: 0, isObject: true }) //метод Object.assign

////////////////////////////////////////////////////////////////////////////////////
//задание 2 - Скопировать объект counter всеми возможными способами;

const counter = { count: 0, isObject: true }  // исходный объект

const copyCounter1 = Object.assign({}, counter)                   // поверхностное копирование
const copyCounter2 = { ...counter }                              // оператор spread
const copyCounter3 = JSON.parse(JSON.stringify(counter))        // Это копирование подходит, когда нет свойств - функций (методов)
const copyCounter4 = makeCopyObj(counter)                      // Поверхностное копирование с помощью созданной функции
const copyCounter5 = _.cloneDeep(counter)                     // Использование библиотеки lodash (необходим импорт библиотеки)
const copyCounter6 = structuredClone(counter)                // Глобальный метод (только современные браузеры || полифил)

function makeCopyObj(obj) {
    let copy = {};
    for (let key in obj) {
        copy[key] = obj[key]
    }
    return copy
}
/////////////////////////////////////////////////////////////////////////////////
//Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1() {
    // code
    return
}                           // function declaration

const makeCounter2 = function () {
    //code
    return
}                          // function expression

const makeCounter3 = function foo() {
    //code
    return
}                          // NFE

const makeCounter4 = () => {
    //code
    return
}                          // arrow function (быть внимательным к this, т.к. стрелочная функция берет его из внешнего LexEnv)

//////////////////////////////////////////////////////////////
//Бонус задания 1,2

const obj1 = {
    here: {
        is: 'on', other: '3'
    }, object: 'Y'
}

const obj2 = {
    here: {
        is: 'on', other: '2'
    }, object: 'Y'
}

const deepEqual = (obj1, obj2) => {
    //проверяем, что параметры это объекты
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false
    }

    //перебираем ключи
    for (let key in obj1) {
        // если ключ объект - вызывем deepEqual рекурсионно
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false
            }
            continue
        }
        // если ключ не объект, то сравниваем
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

console.log(deepEqual(obj1, obj2))  //false

///////////////////////

function reverseStr(str) {
    return str.split('').reverse().join('')
}

console.log(reverseStr('Hello'))  // olleH





