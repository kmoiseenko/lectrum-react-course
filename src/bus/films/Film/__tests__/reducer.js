import { filmReducer } from "./../reducer";
import { filmActions } from "./../actions";
import { types } from "./../types";

describe("Film reducer:", () => {
    test("Should return initial state by default", () => {
        expect(filmReducer(void 0, {})).toMatchSnapshot();
    });

    test(`Should handle ${types.FILM_START_FETCHING} action`, () => {
        expect(filmReducer(void 0, filmActions.startFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.FILM_STOP_FETCHING} action`, () => {
        expect(filmReducer(void 0, filmActions.stopFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.FILM_SET_FETCHING_ERROR} action`, () => {
        expect(filmReducer(void 0, filmActions.setFetchingError())).toMatchSnapshot();
    });
    
    test(`Should handle ${types.FILM_FILL} action`, () => {
        expect(filmReducer(void 0, filmActions.fill())).toMatchSnapshot();
    });
});