import TallGrass from '../../src/components/TallGrass';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('TallGrass', () => {
  let wrapper;

  let wild = "Snorlax"

  beforeEach(() => {
    jasmineEnzyme();

    wrapper = shallow(
      <TallGrass
        wildPokemon={wild}
      />
    );
  });

  it('should render a wild pokemon ', () => {
    expect(wrapper.text()).toContain('Snorlax');
  });

  it('should have a tall grass image background', ()=> {
    expect(wrapper.find('h1')).toBePresent();
  });

});
