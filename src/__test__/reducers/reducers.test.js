import reducer from '../../reducers/reducers'

describe('Reducers', () => {
    test('Retornar initial State', ()=>{
        expect(reducer({},{})).toEqual({});
    });
});