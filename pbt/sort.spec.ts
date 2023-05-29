import fc from "fast-check";
import { sort } from "./src/sort";

describe("sort", () => {
  it("has the same length as source", () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (data) =>
        expect(sort(data)).toHaveLength(data.length)
      )
    );
  });

  it("produces an ordered array", () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (data) => {
        const sorted = sort(data);
        for (let idx = 1; idx < sorted.length; ++idx) {
          expect(sorted[idx - 1]).toBeLessThanOrEqual(sorted[idx]);
        }
      })
    );
  });
});
