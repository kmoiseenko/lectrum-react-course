import { personReducer } from "./../reducer";
import { personActions } from "./../actions";
import { types } from "./../types";

describe("Person reducer:", () => {
    test("Should return initial state by default", () => {
        expect(personReducer(void 0, {})).toMatchSnapshot();
    });

    test(`Should handle ${types.PERSON_START_FETCHING} action`, () => {
        expect(personReducer(void 0, personActions.startFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.PERSON_STOP_FETCHING} action`, () => {
        expect(personReducer(void 0, personActions.stopFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.PERSON_SET_FETCHING_ERROR} action`, () => {
        expect(personReducer(void 0, personActions.setFetchingError())).toMatchSnapshot();
    });
    
    test(`Should handle ${types.PERSON_FILL} action`, () => {
        expect(personReducer(void 0, personActions.fill())).toMatchSnapshot();
    });
});