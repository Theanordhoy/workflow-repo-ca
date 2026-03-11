import { expect, it, describe } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("should return true when current path matches href exactly", () => {
    const currentPath = "/index.html";
    const href = "/index.html";
    expect(isActivePath(currentPath, href)).toBe(true);
  });

  it("should return true for root path when current path is '/' or '/index.html'", () => {
    const href = "/";
    const currentPath1 = "/";
    const currentPath2 = "/index.html";
    expect(isActivePath(href, currentPath1)).toBe(true);
    expect(isActivePath(href, currentPath2)).toBe(true);
  });

  it("should return true when current path includes the href", () => {
    const href = "/products"
    const currentPath = "/products/id"
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("should return false when paths don't match", () => {
    const href = "/about.html"
    const currentPath = "/index.html"
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
