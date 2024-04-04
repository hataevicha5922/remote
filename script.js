// console.log(Number.MIN_VALUE);

// function foo(a) {
//   console.log(a + b);
//   var a = 30;
// }

// foo(12);
// function getCounter() {
//   let counter = 0;

//   return function () {
//     return counter++;
//   };
// }

// let count_1 = getCounter();
// let count_2 = getCounter();

// console.log(`count_1.1() ${count_1()}`);
// console.log(`count_1.2() ${count_1()}`);

// console.log(`count_2.1() ${count_2()}`);
// console.log(`count_2.2() ${count_2()}`);

// let student = {
//   name: "Дмитрий",
//   course: "HTML + CSS",
//   level: "junior",
//   statement() {
//     console.log(
//       `${this.name} c уровнем ${this.level} хочет поступить на курс ${this.course}`
//     );
//   },
// };

// let user = {
//   name: "Alex",
//   course: "HTML + CSS",
//   level: "junior",
// };

// student.statement.call(user);

// async function a(p) {
//   return p;
// }

// console.log(1);

// (async function () {
//   console.log("f1");
//   console.log(await a("a1"));
//   console.log("f2");
//   console.log(await a("a2"));
//   console.log("f3");
// })();

// (function () {
//   console.log("f1");
//   a("a1").then((p) => {
//     console.log(p);
//     console.log("f2");
//     a("a2").then((p) => {
//       console.log(p);
//       console.log("f3");
//     });
//   });
// })();

// console.log(2);
// var count = 0;

// function makeCounter() {
//   return function () {
//     return count++;
//   };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());

// let user = { name: "Alex" };

// Object.defineProperty(user, "age", {
//   value: 35,
//   configurable: true,
// });

// Object.defineProperty(user, "age", {
//   writable: true,
// });
// let descriptor = Object.getOwnPropertyDescriptor(user, "age");

// user.age = 36;

// console.log(user);

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // в консоли: напишите alert(value); Такой переменной нет!
//   }

//   return g;
// }

// let g = f();
// g();

// function slow(x) {
//   return x;
// }

// function cashRes(func) {
//   let cash = new Map();

//   return function (x) {
//     if (cash.has(x)) {
//       return `${x} from cash`;
//     }

//     let res = func(x);

//     cash.set(x, res);

//     return res;
//   };
// }

// slow = cashRes(slow);

// console.log(slow(1));
// console.log(slow(1));
// console.log(slow(12));

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function (student) {
//       console.log(this.title + ": " + student);
//     });
//   },
// };

// group.showList();

// 1 week

// var i = 1;
// var b = {};

// (function(){
//     i++;
//     b.j = 1;
// })();

// console.log(i, b); // 2 {j: 1}

// (function(i, b) { // let i = 2
//     i++;
//     // 3
//     b.k = 1;
// })(i, b);

// console.log(i, b); // 2, {j: 1, k: 1}

// const a = Symbol('check')
// const b = Symbol('check')

// console.log(a === b);

// function foo() {
//     console.log('d2.1', d2);
//     let d1 = '1';
//     return function() {
//         console.log('d1', d1);
//         console.log('d2.2', d2);
//     }
// }

// const d2 = '2';
// const x = foo();

// x();

//d2.1, '2'
// d1, '1'
//d2.2, '2'

// function createIncrement() {
//   let value = 0;

//   function increment(){
//     value += 1;
//     console.log(value)
//   }

//   function log(){
//     const message = `Current value is ${value}`
//     console.log(message)
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();

// increment() // 1
// increment() // 2
// increment() // 3

// log() //"Current value is 0"        // почему не 3?

// const o = {
// 	x: 1,
// 	foo() {
// 	    console.log(`Hi! My name is ${this.x}`)
//   },
// 	boo: () => {
//       console.log(`Hi! My name is ${this.x}`)
//   }
// }

// o.foo(); //1
// o.boo(); //

// let foo = {
//   x: 42,
//   baz: function() {
//     console.log(this);
//   },
//   bar: () => {
//     console.log(this.x);
//   }
// }

// foo.baz();    // 'this' ? {}

// let bar = foo.baz;
// bar();       // 'this' ?

// foo.bar(); // 'this.x' ?

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// 1, 7, 3, 5, 2, 6, 4

// Promise.reject('a') //
//     .then(p=>p+'1',p=>p+'2') //
//     .catch(p=>p+'b') //
//     .catch(p=>p+'с') //
//     .then(p=>p+'d1') // a2d1
//     .then('d2') //
//     .then(p=>p+'d3') // ad2d1d3
//     .finally(p=>p+'e') //
//     .then(p=>console.log(p)) // ?

// setTimeout(() => console.log('a'));

// Promise.resolve()
//   .then((first) => {
//     console.log('first', first);
//     return 'b';
//   })
//   .then(
//     Promise.resolve().then((second) => {
//       console.log('second', second);
//       return 'c';
//     })
//   )
//   .then((third) => console.log('third', third));

// console.log('d');

// d, 'first' undefined, 'second' undefined, 'third' b, a

// console.log("start");

// async function foo() {
// console.log("1");
// await console.log("2");
// console.log("3");
// }

// foo();

// console.log("end");

// "start" 1 2 end 3

// function sumNum(num) {
//   let n = num.toString().split("");
//   console.log(n);

//   let res = n.reduce((cur, prev) => {
//     return +prev + +cur;
//   }, 0);

//   return res;
// }

// console.log(sumNum(123));

// function backSpace(str) {
//   let res = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "#") {
//       res.push(str[i]);
//     } else {
//       res.pop();
//     }
//   }
//   return res;
// }

// console.log(backSpace("hel#l##o!"));

// let a = {
//   num: 1,
//   sum() {
//     return this.num + 1;
//   },
// };

// let b = Object.create(a);

// b.num = 11;

// console.log(b.sum());

// function Auto() {
//   console.log("our car");
// }

// const toyota = new Auto();

// console.log(toyota.constructor.__proto__);

// let arr = [1, 2, 3];

// let newArr = arr.map((item) => item * 2);

// console.log(arr, newArr);

// console.log(NaN + 1 + null + 1); // Nan1

// console.log(NaN + 1 + null + 1 + ""); // "NaN"

// console.log("" + NaN + 1 + null + 1); //"NaN1null1"

// console.log("foo" + +"bar"); // fooNaN

// console.log([] == ![]);

// const str = "str";

// str.len = 4;

// console.log(str.len);

// var i = 1;

// var b = {};
// (function () {
//   i++;
//   b.j = 1;
// })();

// console.log(i, b);

// (function (i, b) {
//   i++;
//   b.k = 1;
// })(i, b);

// console.log(i, b);

// let a = { a: "a" };

// let b = a;

// b.b = "b";

// const foo = function (c) {
//   c = { c: "c" };
// };

// foo(b);

// console.log(a);
// console.log(b);

// let foo = {
//   bar: 1,
// };

// const baz = foo;

// foo.bar = 2;

// foo = {
//   bar: 3,
// };

// console.log(baz.bar); // ?

// var a = {};
// function clear(a) {
//   a.b = 2;
//   a = null;
//   console.log(a);
// }
// clear(a);

// console.log(a);
// console.log(a.b);

// console.log(typeof double); //

// function double(num) {
//   return num * 2;
// }
// var double = 77;

// console.log(typeof double); //

// console.log(NaN + 1) // NaN
// console.log(NaN + 'o') //NaNo
// console.log(undefined + 1) //NaN
// console.log(undefined - 1) //NaN
// console.log(null + 1) //1
// console.log(null / 5) //0
// console.log(5 / undefined); //NaN
// console.log(-5 / null); //-Infinity
// console.log(null == 0) //false
// console.log(null == '') //false
// console.log(null > 0) //false
// console.log(null >= 0) //true
// console.log({} + {}) //[object Object]
// console.log(+{}) //NaN
// console.log(null == '') //false
// console.log('foo' + + 'bar') //fooNaN
// console.log('11' + '1' - 1) //110
// console.log(typeof Object) //function
// console.log(typeof Math) // object

// console.log(Boolean([])); // true
// console.log(Boolean(function () {})); //true
// console.log(Boolean(Symbol('Hi'))); //true
// console.log(typeof function () {}); //function

// console.log([] == []); //false
// console.log(true == 1); //true
// console.log(false == 0); //true
// console.log(false === ''); // false
// console.log(typeof null); //object

// const res = "B" + "a" + (1 - "hello"); //
// console.log(res); // BaNaN
// const res2 = (true && 3) + "d";
// console.log(res2); // 3d
// const res3 = Boolean(true && 3) + "d";
// console.log(res3); // trued

// function x() {}

// console.log(typeof x); // function
// console.log(x instanceof Object); // true

// var str1 = String(123);
// var str2 = new String(123);

// console.log(typeof str1 === typeof str2); //false
// console.log(str1 === str2); //false

// console.log(str1 === String(123)); // true
// console.log(str2 === new String(123)); //false

// console.log(str1 === 123); // false
// console.log(str1 === '123'); //true

// console.log(str1 == str2); //true
// console.log(str1 == 123); // true
// console.log(str1 == "123"); // true

// var y = [];
// console.log(typeof y); // object

// var str3 = "123";
// str3[0] = "2";
// console.log(str3); // 123

// var a = 1 + 2 + 3 + "";
// var b = "" + 1 + 2 + 3;

// console.log(a, typeof a); // ?"6" string
// console.log(b, typeof b); // ? "123" string

// var c = "123x";
// console.log(Number(c)); // ? NaN
// console.log(parseInt(c, 10)); //123
// console.log(+c); //NaN
// console.log(typeof +c); // ?number

// console.log(Boolean(String(false))); // true

// var d = [];
// console.log(d ? 1 : 2); //1

// console.log("a" && "b" && "c")// c
// console.log("a" || "b" || "c")// a
// console.log("a" && "" && "c")// ""
// console.log("a" && "" || "c")//c
// console.log("" ?? "a")// ""
// console.log(null ?? "a")// "a"

// let str = 'string';
// str.len = 4;
// console.log(str.len); // undefined

// var i = 1;
// var b = {};

// (function(){
//     i++;
//     b.j = 1;
// })();
// console.log(i, b); //2 {j: 1}

// (function(i, b) {
//     i++;
//     b.k = 1;
// })(i, b);
// console.log(i, b); // 2 {j:1, k:1}

// const test = new Array(3).fill([0,0,0])
// console.log(test)
// test[1][0] = 1
// console.log(test)

// let a = { a: "a" };
// let b = a;

// b = { b: "b" };

// const foo = function(c) {
//     c = { c: "c" };
// };

// foo(b);

// console.log(a);// {a: "a"}
// console.log(b);// {b: "b"}

// let foo = {
//   bar: 1,
// }

// const baz = foo;

// foo.bar = 2

// foo = {
//   bar: 3
// }

// console.log (baz.bar);  // ? 2

// var a = {};
// function clear(a) {
//     a.b = 2;
//     a = null;
// }
// clear(a);

// console.log(a); //{b: 2}
// console.log(a.b);//2

// function test() {
//   foo();
//   bar();
//   var foo = function () {
//       console.log("FOO");
//   }
//   function bar() {
//       console.log("BAR");
//   }
// }
// test(); // ?

// var a = 1;

// function foo() {
//     console.log(a);
// }

// function bar() {
//     var a = 2;
//     foo();
// }

// bar(); // ?1

// let a = a + 1;
// console.log(a);

// function foo(a) {
//   if (a > 0) {
//     let a = a + 10
//     return a
//   }
//   return a
// }
// console.log(foo(15))

// function say(a = b, b) { // var | let
//   console.log(a, ' ', b);
// }

// say(undefined, 2);

// console.log(
//   (function (a, b = () => a) {
//       var a;
//       var c = a;
//       a = 2;
//       return [a, c, b()];
//   })(1)
// )

// var a = 1;
// var b = 2;

// (function() {
//     var b = 3;
//     a += b;
// })();

// console.log(a);  //?
// console.log(b);  //?

// console.log(x) //undefined

// var x = 1;

// console.log(x); //1

// function car() {
//     if(false) {
//         var x = 2;
//     }
//     console.log(x); //undefined
// }

// car()
// console.log(x); //1

// function getClosure() {
//     var canYouSeeMe = "here I am";
//     return (function theClosure() {
//         return {canYouSeeIt: canYouSeeMe ? "yes!" : "no"};
//     });
// }

// var closure = getClosure();
// console.log(closure().canYouSeeIt);  // ? yes!

// console.log("a" && "b" && "c")//
// console.log("a" || "b" || "c")//
// console.log("a" && "" && "c")//
// console.log("a" && "" || "c")//
// console.log("" ?? "a")//
// console.log(null ?? "a")//

const array = [1, 4, 6, 3, 2, 7];

// const bubleSort = (arr) => {
//    for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
// };

// const bbSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
// };

// console.log(bubleSort(array));

// var first;
// var second;

// function testFn() {
//   var a = 10;

//   first = function () {
//     console.log(++a);
//   };

//   second = function () {
//     console.log(--a);
//   };

//   a = 2;
//   first(); //3
//   console.log(`a: ${a}`);
// }

// testFn();

// first(); //4
// second();

let a = 12;

let foo = function () {
  let a = 42;
  console.log(this.a);
};

const b = {
  a: 36,
};

foo.call(b);

b.bar = foo;
