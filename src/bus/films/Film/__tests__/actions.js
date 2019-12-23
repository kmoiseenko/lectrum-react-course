import { filmActions } from "../actions";
import expectExport from "expect";

describe("Film actions", () => {
  test("startFetching", () => {
    expectExport(filmActions.startFetching()).toMatchSnapshot();
  });

  test("stopFetching", () => {
    expectExport(filmActions.stopFetching()).toMatchSnapshot();
  });

  test("fill", () => {
    expectExport(filmActions.fill()).toMatchSnapshot();
  });

  test("setFetchingError", () => {
    expectExport(filmActions.setFetchingError()).toMatchSnapshot();
  });

  test("filmFetchAsync", () => {
    expectExport(filmActions.filmFetchAsync()).toMatchSnapshot();
  });
});
