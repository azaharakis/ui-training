// ES6 Modules
/*
   Import modules here
*/

export function lesson() {
    /* 1. How would we bring in the main export from the directory modules and return it */
    return main;
};

export function lesson2() {
    /* 2. How would we bring in the export myFunc from the directory modules and return it */
    return myFunc;
}

export function lesson3() {
    let myFunc = null;
    /* 2.1 How would we bring in the export myFunc from the directory modules but name it bar and return it */
    return bar;
}

export function lesson4() {
    /* 2.2 How do we bring in all exports from modules under the name space `modules` and return it. */
    return modules;
}