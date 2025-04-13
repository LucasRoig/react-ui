import { expectTypeOf, test } from "vitest";

test("vitest works", () => {
  expectTypeOf<string>().toEqualTypeOf("bliblu");
})
