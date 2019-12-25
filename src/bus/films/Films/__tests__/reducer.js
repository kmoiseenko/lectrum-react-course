import { filmsReducer } from "./../reducer";
import { filmsActions } from "./../actions";
import { types } from "./../types";

describe("Films reducer:", () => {
    test("Should return initial state by default", () => {
        expect(filmsReducer(void 0, {})).toMatchSnapshot();
    });

    test(`Should handle ${types.FILMS_START_FETCHING} action`, () => {
        expect(filmsReducer(void 0, filmsActions.startFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.FILMS_STOP_FETCHING} action`, () => {
        expect(filmsReducer(void 0, filmsActions.stopFetching())).toMatchSnapshot();
    });

    test(`Should handle ${types.FILMS_SET_FETCHING_ERROR} action`, () => {
        expect(filmsReducer(void 0, filmsActions.setFetchingError())).toMatchSnapshot();
    });
    
    test(`Should handle ${types.FILMS_FILL} action`, () => {
        expect(filmsReducer(void 0, filmsActions.fill())).toMatchSnapshot();
    });
});