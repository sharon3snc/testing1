import getColors from "./Getcolors";

test('comprobar que el array contiene blue', ()=> {
    expect(getColors()).toContain('blue');
});
