import { filterUnnecessaryData } from "./utilities";
import { unfilteredVideoGameData, filteredVideoGameData } from "../sampleData";
import "@testing-library/jest-dom";

describe("Utilities", () => {
  it("should simplify the object returned from a GET request", () => {
    const cleanedData = filterUnnecessaryData(unfilteredVideoGameData);

    expect(cleanedData).toStrictEqual(filteredVideoGameData);
  });
});
