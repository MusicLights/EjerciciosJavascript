console.log("Ejercicio #1");
let nums = [3, 5, 7, 1, 6];
console.log(nums);
nums.sort((b,a) => a-b);
let numa = nums.shift();
console.log("El número mayor del arreglo es " + numa);



console.log("Ejercicio #2");

let nums2 = [-1, 3, 4, 2, 6];
console.log(nums2);
nums.sort(function(a,b){
    return a-b;
})
let numin = nums2.shift();
console.log("El número menor del arreglo es " + numin);



console.log("Ejercicio #3");
let nums3 = [1, 22, 5, 17, 10, 8, 40, 5];
let numsiguales = [];
const tempArray = [...nums3].sort();
for (let index = 0; index < tempArray.length; index++) {
    if (tempArray[index+1] === tempArray[index]) {
        numsiguales.push(tempArray[index]);
        console.log("Los números iguales son " + numsiguales);
    }
    else{
        console.log("No hay números repetidos");
    }
}
