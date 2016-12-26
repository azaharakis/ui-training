import expect, { spyOn } from 'expect';
import main, { myFunc } from './modules/es6';
import * as modules from './modules/es6';
import { lesson, lesson2, lesson3, lesson4 } from './lesson';
import testUtils from '../../utils/test';

export const test = () => {
    testUtils("1. How would we bring in the main export from the directory modules and return its value 'default'", () => {
        expect(lesson()).toBe(main);
    });

    testUtils("2. How would we bring in the export foo from the directory modules and return its value here", () => {
        expect(lesson2()).toBe(myFunc);
    });

    testUtils("2.1 How would we bring in the export foo from the directory modules but name it bar and return it", () => {
        //TODO: This is too hard to assert...
        expect(lesson3()).toBe(myFunc);
    });

    testUtils("2.1 How would we bring in the export foo from the directory modules but name it bar and return it", () => {
        expect(lesson4()).toBe(modules);
    })
}


