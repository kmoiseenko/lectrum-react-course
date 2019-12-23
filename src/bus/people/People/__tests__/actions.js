import { peopleActions } from "../actions";
import expectExport from "expect";

describe("peopleActions", () => {
    test("startFetching", () => {
        expectExport(peopleActions.startFetching()).toMatchSnapshot();
    });

    test("stopFetching", () => {
        expectExport(peopleActions.stopFetching()).toMatchSnapshot();
    });

    test("fill", () => {
        expectExport(peopleActions.fill()).toMatchSnapshot();
    });

    test("setFetchingError", () => {
        expectExport(peopleActions.setFetchingError()).toMatchSnapshot();
    });

    test("peopleFetchAsync", () => {
        expectExport(peopleActions.peopleFetchAsync()).toMatchSnapshot();
    });
});