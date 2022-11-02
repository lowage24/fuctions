//Циклы while и for
//1
// var x = 1;
// while (x<=100){
//     console.log(x);
//     x++
// }

//2
// var x =11;
// while(x <= 33){
//     console.log(x);
//     x++
// }

//3
// var x;
// for(x =1; x <=100; x++){
//     if(x%2==0){
//         console.log(x)
//     }
// }

//4
// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum)

//Работа с for для массивов
//1
// let arr = [1,2,3,4,5];
// for (let i = 0; i <arr.length; i++){
//     console.log(arr[i])
// }

//2
// let array = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//   result += array[i];
// }
// console.log(result);

//Работа с for-in
//1
// var obj = {green: 'зелёный', red:'красный', blue:'голубой'}
// for (key in obj){
//     console.log(key +' ' + obj[key])
// }

//2
// let obj={'Коля':200,'Вася':300,'Петя':400}; 
  
//  for(key in obj){ 
//     console.log([key]+'-Зарплата'+obj[key]+'долларов'); 
//  }

//Задачи
//1
// let arr =[2,5,9,15,0,4];
// for (i = 0; i < arr.length; i++) {
//     if(arr[i] > 3 && arr[i] <10){
//         console.log(arr[i])
//     }
// }

//2
// let sum = 0;
// let arr =[-2,-5,15,4];
// for (i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 ){
//         sum += arr[i]
//     }
// }
// console.log(sum)

//3
// let x;
// let arr =[1, 2, 5, 9, 4, 13, 4, 10];
// for (i = 0; i < arr.length; i++) {
//     if(4 == arr[i]){
//         x = 'Есть!'
//         break;
//     }
// }
// console.log(x)

//4
// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }

//5
// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++){
//     console.log('-' + arr+'-')
// }

//6
// let week = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
// let i;
// for (i = 0; i < week.length; i++) {
//     if (week[i] == 'сб'|| week[i] == 'вс') {
//         console.log('<b>' + week[i] + '</b> ');
//     } else {
//         console.log(week[i] + ' ');
//     }
// }

//7
// var arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
// let day = 0 ;
// for (i = 0; i < arr.length; i++) {
// if ( i == day) {
// console.log('<i>' + arr[i] + '</i> <br>');
// }else {
// }
// console.log(arr[i] + '<br>');
// };

//8
// var n = 1000;
// var num = 0;
// while (n>50){
//     num++
//     n/=2
// }
// console.log(num)
// console.log(n)