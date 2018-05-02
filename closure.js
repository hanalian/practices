function greeting(name) {  
    var text = 'Hello ' + name;  
    return function () { alert(text); }  
}  
var sayHello=greeting( "Closure" );  
sayHello();


function sayAlice() {  
    var sayAlert = function() { alert(alice); }  
    // Local variable that ends up within closure  
    var alice = 'Hello Alice';  
    return sayAlert;  
}  
var helloAlice=sayAlice();  
helloAlice();  //'Hello Alice'


//闭包中局部变量是引用而非拷贝
function say233() {  
    var num = 232;  
    var sayAlert = function() { alert(num); }  
    num++;  
    return sayAlert;  
}  
    
var sayAlert = say233();  
sayAlert(); //233


function newClosure(someNum, someRef) {   
    var num = someNum;  
    var arr = [1,2,3];  
    var ref = someRef;  
    return function(x) {  
        num += x;  
        anArray.push(num);  
        alert('num: ' + num +  
        '\narr: ' + arr.toString() +  
        '\nref:' + ref);  
    }  
}  
closure1=newClosure(40,'closure1');  
closure2=newClosure(1000,'closure2');  
    
closure1(5); // num:45 arr:1,2,3,45 ref:closure1 
closure2(-10);// num:990 arr:1,2,3,990 ref:closure2 


