import { peopleReducer } from "./../reducer";
import { peopleActions } from "./../actions";
import { types } from "./../types";

describe("People reducer:", () => {
    test("Should return initial state by default", () => {
        expect(peopleReducer(void 0, {})).toMatchSnapshot();
    });

    test(`Should handle ${types.PEOPLE_START_FETCHING} action`, () => {
        expect(peopleReducer(void 0, peopleActions.startFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.PEOPLE_STOP_FETCHING} action`, () => {
        expect(peopleReducer(void 0, peopleActions.stopFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.PEOPLE_SET_FETCHING_ERROR} action`, () => {
        expect(peopleReducer(void 0, peopleActions.setFetchingError())).toMatchSnapshot();
    });
    
    test(`Should handle ${types.PEOPLE_FILL} action`, () => {
        expect(peopleReducer(void 0, peopleActions.fill())).toMatchSnapshot();
    });
});