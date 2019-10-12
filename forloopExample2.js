var a = 1, b = 1,f;
var i=0;
for(i=3;i<=15;i++){
f=a+b;
a=b;
b=f;
}
console.log(f)
