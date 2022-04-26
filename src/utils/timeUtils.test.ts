import { fromTotalMins } from "./timeUtils";

describe("fromTotalMins", () => {
  const testData = [
    { input: 540, expected: {hours: 9, minutes: 0} },
    { input: 570, expected: {hours: 9, minutes: 30} },
    { input: 1980, expected: {hours: 9, minutes: 0} },
    { input: 2010, expected: {hours: 9, minutes: 30} },
  ];

  testData.forEach(({ input, expected }) => {
    it(`should convert ${input} mins`, () => {
      expect(fromTotalMins(input)).toStrictEqual(expected);
    });
  });
});
