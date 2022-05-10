const foo = require('../src/main');

describe('some testing cases', ()=>{
    test('testing foo as a false', ()=>{
        expect(foo()).toBe(true);
    });
});