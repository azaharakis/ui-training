import expect from 'expect';
import { lesson } from './lesson';
import testUtils from '../../utils/test';

export const test = () => {
    return testUtils("If we wanted the last console.log to echo 'item' How can we fix using with let.", () => {
        expect(lesson()).toBe('item');
    });
}


