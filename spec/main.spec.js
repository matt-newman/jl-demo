import {
    thing
} from '../src/js/main.js';

describe("thing", () => {
    it("should return a thing", () => {
        const expected = "a thing";
        const output = thing();

        expect( output ).toBe( expected );
    });
});