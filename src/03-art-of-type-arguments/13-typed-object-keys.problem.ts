import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * There are two possible solutions to this problem - and it's
 * to do with the way you specify the generic. Can you get
 * both solutions?
 */
// T here represents the entire object
const typedObjectKeys = <T extends object>(obj: T) => {
  return Object.keys(obj) as Array<keyof T>;
};
// here I'm using generic to represent the key of the object, not the entire object
// const typedObjectKeys = <TKey extends string>(obj: Record<TKey, any>) => {
//   return Object.keys(obj) as Array<TKey>;
// };

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
