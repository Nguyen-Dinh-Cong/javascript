const arrNumber = [9,3,5,8,1,4,3,2];
const arrStr = ["Banana", "Orange", "Apple","Mango", "Kiwi"];
arrNumber.push(10);//Them 10 vao cuoi mang
console.log(arrNumber);
arrNumber.unshift(10);//Them 10 vao dau mang
console.log(arrNumber);
arrNumber.pop();//Xoa phan tu cuoi mang
console.log(arrNumber);
arrNumber.shift();//Xoa phan tu dau mang
console.log(arrNumber);
arrNumber.sort();//Sap xep mang tang dan
console.log(arrNumber);
arrStr.sort();
console.log(arrStr);
//Lay mang ra mang con tu vi tri 3 den vi tri 5
const newArray=arrNumber.slice(3, 6);
console.log(newArray);
//Xoa 1 phan tu o vi tri 3 va them 3 phan tu moi
arrNumber.splice(3, 1, 1, 2, 3);
console.log(arrNumber);
//Tim phan tu gia tri 3 dau tien trong mang
const index = arrNumber.indexOf(3);
console.log(index);
//Tim phan tu gia tri 3 cuoi cung trong mang
const lastIndex = arrNumber.lastIndexOf(3);
console.log(lastIndex);
arrNumber.forEach(number => console.log(number));//Duyet mang
console.log(arrNumber);
arrNumber.map(number1 => console.log(number1));//Duyet mang
console.log(arrNumber);
//Loc phan tu co gia tri lon hon 5
const filterNumber = arrNumber.filter(number => number > 5);
console.log(filterNumber);
//Tong cac phan tu trong mang
const sum = arrNumber.reduce((number1, number2) => number1 + number2, 0);
console.log(sum);
//Noi hai mang arrNumber va arrStr voi nhau
const newArr = arrNumber.concat(arrStr);
console.log(newArr);
const joinStr = arrStr.join("-");//Noi cac phan tu cua mang boi dau "-"
console.log(joinStr);
/*arrNumber.fill(0);//Gan cac phan tu cua mang = 0
console.log(arrNumber);*/
//sao chep 1 hoac 1 nhom phan tu mang tu vi tri nay sang vi tri khac cung mang
arrNumber.copyWithin(2, 1, 3);
console.log(arrNumber);
//Tim kiem phan tu 
//- find: tra ve phan tu dau tien neu thoa dieu kien, khong tim thay tra ve undefined
const findNumber = arrNumber.find(number => number % 3 === 0);
console.log(findNumber);
//- finIndex: tra ve phan tu dau tien thoa dieu kien, khong tim thay tra ve -1
const findIndexNumber = arrNumber.findIndex(number => number % 2 === 0);
console.log(findIndexNumber);
//- findLast: tra ve phan tu cuoi mang neu thoa dieu kien, khong tim thay tra ve undefined
const findLastNumber = arrNumber.findLast(number => number % 3 === 0);
console.log(findLastNumber);
//- finlastIndex:tra ve phan tu cuoi thoa dieu kien, khong tim thay tra ve -1
const findLastIndexNumber= arrNumber.findLastIndex(number => number % 2 === 0);
console.log(findLastIndexNumber);
//kiem tra cac phan tu thoa man dieu kien
const oneNumber = number => number % 2 !== 0;
const everyArr = arrNumber.every(oneNumber);
console.log(everyArr);
//Kiem tra co it nhat 1 phan tu thoa man dieu kien
const aNumber = number => number % 2 === 0;
const someArr = arrNumber.some(aNumber);
console.log(someArr);