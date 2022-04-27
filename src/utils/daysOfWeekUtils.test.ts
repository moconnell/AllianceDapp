import DayOfWeek from "../types/dayOfWeek";
import DaysOfWeek from "../types/daysOfWeek";
import { toDaysOfWeek } from "./daysOfWeekUtils";

describe("toDaysOfWeek", () => {
  const testData = [
    { input: DayOfWeek.Sunday, expected: DaysOfWeek.Sunday },
    { input: DayOfWeek.Monday, expected: DaysOfWeek.Monday },
    { input: DayOfWeek.Tuesday, expected: DaysOfWeek.Tuesday },
    { input: DayOfWeek.Wednesday, expected: DaysOfWeek.Wednesday },
    { input: DayOfWeek.Thursday, expected: DaysOfWeek.Thursday },
    { input: DayOfWeek.Friday, expected: DaysOfWeek.Friday },
    { input: DayOfWeek.Saturday, expected: DaysOfWeek.Saturday },
  ];

  testData.forEach(({ input, expected }) => {
    it(`should convert ${DayOfWeek[input]}`, () => {
      expect(toDaysOfWeek(input)).toStrictEqual(expected);
    });
  });
});
