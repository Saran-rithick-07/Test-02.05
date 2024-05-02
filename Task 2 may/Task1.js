var arr = [1, 2, 3, 4, 5];
let sum = 0;
for ( let b of arr){
    sum+= b;
}
console.log(sum);


var a = [ 1,2,3];
var b =  [4, 5];

var res ="["+ a + "," + b +"]";
console.log(res);


var a= [1,2,3,3,4,5,5];
 for (i = 0; i < a.length; i++){
    if (a[i] == a[i+1]){
        console.log(a[i]);
    }
 }