import expect from 'expect';
import { lesson, lesson2, properties, idGeneratorFactory, addTheseValues } from './lesson';
import testUtils from '../../utils/test';

export const test = () => {

    testUtils("Given the properties above return a new array with no house's.", () => {
        const expectation = properties.filter(i => i.type !== 'house');
        expect(lesson2()).toEqual(expectation);
    });

    const generateID = idGeneratorFactory();
    testUtils("Given the properties above return a new array of properties assigning each one an ID.", () => {
        const expectation = properties.map(i => ({
            id: generateID(),
            ...i
        }));
        expect(lesson()).toEqual(expectation);
    });

};



