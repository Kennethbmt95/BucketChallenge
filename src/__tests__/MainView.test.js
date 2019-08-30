import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
import MainView from '../MainView'

let wrapper

describe('Main Component', () => {
      it('starts with a count of 0', () => {
        const wrapper = shallow(<MainView />);
        const text = wrapper.find('h2').text();
        expect(text).toEqual('Total Steps: 0');
      });
    });
