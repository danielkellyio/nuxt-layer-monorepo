import { test, expect, describe, beforeEach } from "vitest";

describe("no Nuxt context sanity check", () => {
  test("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4);
  });
  test("helloFromLayer", () => {
    expect(helloFromLayer()).toBe("Hello from layer");
  });
});
