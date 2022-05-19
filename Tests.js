//Unit Test

let expect = chai.expect;

describe('MyFunction', () => {
    describe('Player Class', () => {
        it('It should return a name', () => {
            let testName = new Player('Lola');
            expect(testName.name).to.equal('Lola');
        });
    });
});