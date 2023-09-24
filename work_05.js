// 'use strict'


///////////////////////////////////////////////////////////////////////////////////////////////////
// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

let arr = [10, 12, 15, 21]
{


///Решение с использованием Promise
  function foo(arr) {
    let i = 0;          // сохраняем состояние индекса

    if (arr.length === 0) {     // проверка на пустой массив
      return сonsole.log(0)
    }

    console.log(i++)           // выводим первый элемент без задержки

    function bar() {            //Объявляем функцию с рекурсией
      if (i === arr.length) {
        return
      }
      new Promise((res) => {
        setTimeout(() => res(), 3000)
      }).then(() => {
        console.log(i++)
        bar()
      })
    }

    bar()                    // Ркурсивно вызываем
  }

  //  foo(arr)          // 0 1 2 3
}



///Решение с использованием SetInterval
{
  function foo(arr) {
    if (arr.length === 0) {     // проверка на пустой массив
      return сonsole.log(0)
    }
    let i = 0;                   // состояние индекса

    console.log(i++)             // выводим нулевой индекс

    let stop = setInterval(() => {    //логика с задержкой последующих выводов
      return i === arr.length
        ? clearInterval(stop)
        : console.log(i++)
    }, 3000)
  }

  //foo(arr)  // 0 1 2 3
}
//////////////////////////////////////////////////////////////////////////
//Типовая здача
let promiseTwo = new Promise((resolve, reject) => {     //  в переменную promiseTow помещается успешно выполненный промис со значением 'a'
  resolve("a");
});

promiseTwo
  .then((res) => {              // ab       значение а передается как значение аргумента колбека res
    return res + "b";
  })
  .then((res) => {             // abc       предыдущий then вернул значение ab ;  вычисляем  ab + c  и передаем дальше, т к есть return
    return res + "с";
  })
  .finally((res) => {           // блок finally  ничео не принимает и не возвращает, игнорим его
    return res + "!!!!!!!";
  })
  .catch((res) => {             // в этот блок попадает либо откланенный промис либо проброшенная ошибка, проспускаем его
    return res + "d";
  })
  .then((res) => {              // выводим результат abc
    console.log(res);
  });

/////////////////////////////////////////////////////////
//Типовая здача
function doSmth() {
  return Promise.resolve("123");       // объявление функции, которая возвращает успешно выполненный промис с результатом '123'
}

doSmth()
  .then(function (a) {                 // колбек получает как параметр результат просимса '123'     
    console.log("1", a);               // выводит в консоль 1  123
    return a;                          // возвращает 123
  })
  .then(function (b) {                 // колбек примнимает параметр 123
    console.log("2", b);               // выводит в консоль 2 123
    return Promise.reject("321");      // и возвращает отклоненный промис с результатом 321
  })
  .catch(function (err) {              // отклоненный промис попадает в этот блок и передает значение 321 в колбек
    console.log("3", err);             // вывод в консоль 3 321
  })
  .then(function (c) {                 // т к блок catch ничего не вернул, то параметр с будет со значением udefined
    console.log("4", c);               // вывод в консоль 4 undefined
    return c;                          // возвращает undefined
  });

/*
ответ:
1 123
2 123
3 321
4 undefined
*/
////////////////////////////////////////////////////////////////////////////////////////////

// !! await используется только внутри функции async !!

///////////////////////////////////////////////////////////////////////////////////////////
// БОНУС ЗАДАНИЕ 
// /* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl

function fetchUrl(url) {
  let countFetch = 0                              // счетчик вызовов

  function foo(resolve, reject) {
    countFetch++
    console.log('countFetch: ', countFetch)      // проверка в консоли, что действительно делается 5 вызовов при неудаче. В продакшене убрать.
    return fetch(url)
      .then(res => resolve(res.json()))
      .catch(err => {
        if (countFetch === 5) {
          return reject(err)
        }
        foo(resolve, reject)                      // рекурсивно вызвать функцию
      })
  }
  return new Promise(function (resolve, reject) {
    foo(resolve, reject)
  })

}

fetchUrl('https://jsonplaceholder.typicode.com/todos/1')
  .then((res => console.log('res: ', res)))
  .catch(err => console.log('err: ', err))