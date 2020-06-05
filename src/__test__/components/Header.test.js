import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../../components/pages/Header/index';

describe('Header Snapshot', () =>{
    test('Comprobar la UI del componente Header', () => {
        const header = create(<Header />);
        expect(header.toJSON()).toMatchSnapshot();
    });
});