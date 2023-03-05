import result from './Getcolors2';

describe ('Test Getcolors2', () => {

    test('El array tiene 2 elementos', ()=> {
        expect(result.length).toBe(2);
    })

    test ('El array resultante no contiene blue', ()=> {
        expect(result.includes('blue')).toBeFalsy();
    });
});
