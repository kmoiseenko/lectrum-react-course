import { filmsActions } from "../actions";
import expectExport from "expect";

describe("Films actions", () => {
  test("startFetching", () => {
    expectExport(filmsActions.startFetching()).toMatchSnapshot();
  });

  test("stopFetching", () => {
    expectExport(filmsActions.stopFetching()).toMatchSnapshot();
  });

  test("fill", () => {
    expectExport(filmsActions.fill()).toMatchSnapshot();
  });

  test("setFetchingError", () => {
    expectExport(filmsActions.setFetchingError()).toMatchSnapshot();
  });

  test("filmsFetchAsync", () => {
    expectExport(filmsActions.filmsFetchAsync()).toMatchSnapshot();
  });
});
