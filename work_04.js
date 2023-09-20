/////////////////////////////
//1) Какие бывают алгоритмы сортировок ? 

/*
Виды алгоритмов сортировки:
    1. Сортировка пузырьком(Bubble sort)
        Работает справа на лево. Сравнивает два элемента и больший перемещает вправо.
        После прохода по всем едементам сортировка повторяется.
    2. Сортировка перемешиванием(Shaker sort)
        Аналогична сортировки пузырьком, однако идет в двух направлениях. 
        Больший элемент перемещается на парво, а меньший влево. 
        После алгоритм повторяется. Эта сортировка быстрее пердадущей в 2 раза.
    3. Сортировка расчёской(Comb sort)
        Отличается от Bubble sort тем, что сравниваются не соседние елементы,
        а елементы на большом расстоянии. Так все "черепахи" оказываются в начале массива.
        Так происходит пока сравниваемые элементы не окажутся соседями.
    4. Сортировка вставками (Insertion sort)
        а. берем два первых эелемента и сортируем их, теперь у нас есть отсортированный массив из 2-ч элементов.
        б. берем след элемент и сравниваем его с отсортированным массиво и вставляем в него в правильную позицию.
        в. повторям шаг б.
    5. Сортировка Шелла (Shell sort)
        Сначала сравниваются и сортируются между собой значения, стоящие друг от друга на некотором расстоянии - d. 
        После этого расстояние d уменьшается и процедура повторяется до тех пор,
        пока значение d не станет минимальным, т.е. d = 1. 
        Это означает, что сортировка достигла последнего шага.
        А на последнем шага элементы сортируются обычной сортировкой вставками.
    6. Сортировка выбором (Selection Sort)
       Неоднократно ищем наименьший элемент в неотсортированном массиве и перемещаем его в конец отсортированного.
    7. Быстрая сортировка (Quick Sort)
        а. берем элемент из массива
        б. сравниваем все элементы с выбранным и перемещаем их в три условных отриезка отсортированного массива (меньше выбранного, равны и больше)
        в. рекурсивно применям метод к условным отрезкам
    8. Сортировка слиянием (Merge sort)
        Массив разбивается на две части примерно одинакового размера. Разбиение получившихся массивов повторяется до тех пор, пока размер каждого массива не достигнет единицы.
        Каждая из получившихся частей сортируется отдельно, после чего происходит слияние двух массивов следующим образом:
        На каждом шаге сравниваем первые элементы массивов, берём наименьшее значение и записываем в результирующий массив.
        Когда один из массив закончился, добавляем оставшиеся элементы второго массива в результирующий массив.
        Слияние подмассивов продолжается до тех пор, пока не получим один, отсортированный массив.
    9. Пирамидальная сортировка (Heap sort)
        Пирамидальная сортировка - это улучшенная сортировка выбором.
        Для сортировки используется бинарное сортирующее дерево - дерево, у которого выполнены условия:
        а. Каждый лист имеет глубину либо d, либо d-1, d — максимальная глубина дерева.
        б.   Значение в любой вершине не меньше значения её потомков.
    10. Сортировка подсчётом (Counting sort)
        Сортировка подсчётом - это алгоритм, основанный на подсчёте повторяющихся элементов в массиве.
    11. Блочная (карманная, корзинная) сортировка  (Bucket sort)
        Блочная сортировка - это алгоритм, основанный на разделении входного массива
        на несколько частей - блоки/сегменты - и использовании другого алгоритма для их сортировки.
    12. Поразрядная (цифровая) сортировка (Radix sort)
        Поразрядная сортировка - это алгоритм, который использует внутреннюю структуру сортируемых объектов.
    13. Битонная сортировка (Bitonic sort)
        Битонная сортировка - алгоритм, основанный на понятии битонных последовательностей и операций над ними.
        Битонная последовательность - последовательность, которая сначала возрастает, а потом убывает.
    14. Timsort 
        Timsort - гибридный алгоритм, сочетающий в себе сортировку вставками и сортировку слиянием.
        */

/////////////////////////////
//3) Создать объект Person несколькими способами, после создать объект Person2,
// чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.


//Создаем объект несколькими способами
{
    const Person = { name: 'User' }  // литерал
}
{
    function Creator(name) {
        this.name = name
    }
    const Person = new Creator('User')  // функция - конструктор 
}
{
    class Creator {
        constructor(name) {
            this.name = name
        }
    }
    const Person = new Creator('User')  // класс
}
{
    const Person = Object.create(Object.prototype, {
        name: {
            value: 'User',
            writable: true,
            enumerable: true,
            configurable: true
        }
    })                                  // метод Object.create
}
{
    const Person = Object.assign({}, { name: 'User' })  // метод Object.assign
}


// создать объект Person2,
// чтобы в нём были доступны методы объекта Person.
{
    const Person = {
        name: 'User',
        sayHello() {
            console.log(`Hello, my name is ${this.name}`)
        }
    }

    const Person2 = Object.create(Person, {
        name: {
            value: 'User2',
            writable: true,
            enumerable: true,
            configurable: true
        }
    })                                     // Person2: {name: 'User2'}

    Person2.sayHello()                      // Hello, my name is User2
}
// Добавить метод logInfo чтоб он был доступен всем объектам.
{
    Object.prototype.logInfo = function () {
        console.log('Show info here')
    }
    const obj = { name: 'user' }
    obj.logInfo()                            // Show info here
}

// 4) Создать класс PersonThree c get и set для поля name и конструктором, 
//    сделать класс наследник от класса Person.
{
    class PersonThree {
        constructor(name) {
            this.name = name
        }
        get name() {
            return this._name
        }
        set name(value) {
            this._name = value
        }
    }

    const person = new PersonThree('Ann')
    console.log(person.name) // Ann
    person.name = 'Ivan'  // Ivan

    class PersonWithAge extends PersonThree {
        constructor(name, age) {
            super(name)
            this.age = age
        }
    }

    const person2 = new PersonWithAge('Boris', 32)
    console.log(person2)  // PersonWithAge { _name: 'Boris', age: 32 }
}

///////////////////////////////////////////////////////////////////////
//БОНУС: 
//1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    for (let idx = 0; idx < arr.length; idx++) {
        const value = total - arr[idx]
        if (arr.includes(value)) {
            return [arr[idx], value]
        }
    }
}

console.log(firstSum(arr, total))   // [4, 9]

//2) Какая сложность у вашего алгоритма ?

// Сложность порядка n,  => O(n)