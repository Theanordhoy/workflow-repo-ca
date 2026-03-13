import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return the name from the user object in storage", () => {
    const user = { name: "username" };
    saveUser(user);
    const result = getUsername();
    expect(result).toBe("username");
  });

  it("should return null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBe(null);
  });
});
