const { translate } = require("../src/piglatin");

describe("translate function", () => {
  test("words that start with vowels", () => {
    expect(translate("apple")).toBe("appleway");
    expect(translate("expect")).toBe("expectway");
    expect(translate("ink")).toBe("inkway");
    expect(translate("ocean")).toBe("oceanway");
    expect(translate("under")).toBe("underway");
  });
  test("words that start with Capital letter & consanince", () => {
    expect(translate("Desiree")).toBe("esireeday");
    expect(translate("down")).toBe("ownday");
  });
  test("words that start with more than one conanince's", () => {
    expect(translate("space")).toBe("acespay");
    expect(translate("school")).toBe("oolschay");
  });
  test("words that have numbers or symbols", () => {
    expect(translate("189")).toBe("189");
    expect(translate("hello@grandcircus.co")).toBe("hello@grandcircus.co");
  });
  test("A phrase in piglatin!", () => {
    expect(translate("a quick brown fox")).toBe("away uickqay ownbray oxfay");
  });
  test("A phrase in piglatin!", () => {
    expect(translate("A qUick broWn foX")).toBe("away uickqay ownbray oxfay");
  });
});
