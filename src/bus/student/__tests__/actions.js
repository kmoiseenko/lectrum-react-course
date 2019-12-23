import { studentActions } from "../actions";
import expectExport from "expect";

describe("studentActions", () => {
    test("setStudent", () => {
        expectExport(studentActions.setStudent()).toMatchSnapshot();
    });
});