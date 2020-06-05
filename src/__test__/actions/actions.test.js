import { addComicsRequest } from '../../actions/actions';
//import mock

describe('Actions', ()=>{
    test('addComicsRequest action', ()=>{
        const payload = 'comics/ADD_REQUEST';
        const expected = {
            type: 'comics/ADD_REQUEST',
            payload
        };
        expect(addComicsRequest(payload)).toEqual(expected);
    });
});
