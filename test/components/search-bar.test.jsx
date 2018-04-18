/* global describe */
/* global it */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import SearchBar from '../../src/components/search-bar';

configure({ adapter: new Adapter() });

describe('SearchBar component testing', () => {
  it('renders the search bar', () => {
    const search = shallow(<SearchBar />);
    expect(search.find('.search-bar')).to.have.length(1);
  });
});
