// Write a program to print all the numbers divisible by 2 or 3 or 6 from 1 to n, where n will be provided by you
var n = 14;
for(i = 0;i < n;i++){
    if(i%2 === 0 || i%3 === 0 || i%6 === 0){
        console.log(i);
    }
}
