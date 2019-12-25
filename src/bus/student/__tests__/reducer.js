import { studentReducer } from "./../reducer";
import { studentActions } from "./../actions";
import { types } from "./../types";

describe("Student reducer:", () => {
    test("Should return initial state by default", () => {
        expect(studentReducer(void 0, {})).toMatchSnapshot();
    });

    test(`Should handle ${types.SET_STUDENT} action`, () => {
        expect(studentReducer(void 0, studentActions.setStudent())).toMatchSnapshot();
    });
});