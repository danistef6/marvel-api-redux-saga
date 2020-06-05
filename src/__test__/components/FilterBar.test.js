import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock'
import FilterBar from '../../components/pages/FilterBar/index';

describe('<FilterBar/>', () => {

    const handleSearchComics = jest.fn();
    const handleSetLocale = jest.fn();
    const wrapper = mount(
        <ProviderMock>
            <FilterBar handleSearchComics={handleSearchComics} handleSetLocale={handleSetLocale} />
        </ProviderMock>)

    test('Comprobar el selector de idioma', async () => {
        await (() => {
            wrapper.find('button').simulate('click');
                    expect(handleSetLocale).toBeCalledTimes(1);
        }
        )
    });

    test('Comprobar el boton de buscar', async () => {
        const formEventMocked = { preventDefault: jest.fn() };
        await (() => {
            wrapper.find('form').simulate('submit', formEventMocked);
            expect(formEventMocked.preventDefault).toBeCalledTimes(1);
        });
    });
});