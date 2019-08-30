import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
import Form from '../components/Form'

let wrapper

describe('<Form/>', () => {
  beforeAll(() => {
    wrapper = shallow(<Form />)
  })

  it('Rendering Correctly', () => {
    expect(wrapper).toBeDefined()
  })
})
