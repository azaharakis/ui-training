import expect from 'expect';
import React from 'react';
import { lesson, property } from './lesson';
import { mount } from 'enzyme';
import testUtils from '../../utils/test';

export const test = () => {
    const expectation = mount(lesson());
    testUtils('Given the above object write a simple component that has a property image.', () => {
        expect(expectation.contains(<img src={property.image} />)).toExist()
    })
    testUtils('Given the above object now add the property address to the component', () => {
        expect(expectation.text()).toEqual(property.address);
    })
}


