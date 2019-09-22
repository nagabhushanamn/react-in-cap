

// function f1(){
//     console.log("before :: LOG")
//     console.log("f1()");  
//     console.log("after :: LOG")
// }

// f1();

// function f2(){
//     console.log("before :: LOG")
//     console.log("f2()")
//     console.log("after :: LOG")
// }

// f2();

/*

design issues
----------------
    -> code tangling / tight coupling
    -> code scaterring / duplication

    soln:

*/


function f1() {
    console.log("f1()");
}
function f2() {
    console.log("f2()")
}

// Hiher-Orde-Function  ===>  Highe-Oder-Programming  
//i.e thru composition , from small things we build big things with re-usability

function logWrapper(f) {
    return function () {
        console.log("before :: LOG")
        f();
        console.log("after :: LOG")
    }
}
function secWrapper(f) {
    return function () {
        console.log("before :: SEC")
        f();
    }
}

let f1WithLog = logWrapper(f1);
let f1WithLogAndSec = secWrapper(f1WithLog);
f1WithLogAndSec();

let f2WithLog = logWrapper(f2);
f2WithLog();