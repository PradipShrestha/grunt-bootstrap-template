/**
 * Created by Pradip on 5/12/2016.
 */
describe('exampleTest', function () {
    describe('sum', function () {
        it('1 + 2 should be 3', function () {
            var a = 1;
            var b = 2;
            expect(CIsSharpLibrary.add(a, b)).toEqual(3);
        });
    });

});