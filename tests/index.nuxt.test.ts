import { test, expect, describe, beforeEach } from "vitest";

describe("Nuxt context sanity check", () => {
  test("runtime config is defined", () => {
    const config = useRuntimeConfig();
    expect(config).toBeDefined();
  });
});
