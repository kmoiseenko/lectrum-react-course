import { personActions } from "../actions";
import expectExport from "expect";

describe("personActions", () => {
    test("startFetching", () => {
        expectExport(personActions.startFetching()).toMatchSnapshot();
    });

    test("stopFetching", () => {
        expectExport(personActions.stopFetching()).toMatchSnapshot();
    });

    test("fill", () => {
        expectExport(personActions.fill()).toMatchSnapshot();
    });

    test("setFetchingError", () => {
        expectExport(personActions.setFetchingError()).toMatchSnapshot();
    });

    test("personFetchAsync", () => {
        expectExport(personActions.personFetchAsync()).toMatchSnapshot();
    });
});