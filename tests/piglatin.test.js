const { translate } = require("../src/piglatin");

describe("translate function", () => {
  test("words that start with vowels", () => {
    expect(translate("apple")).toBe("appleway");
    expect(translate("expect")).toBe("expectway");
    expect(translate("ink")).toBe("inkway");
    expect(translate("ocean")).toBe("oceanway");
    expect(translate("under")).toBe("underway");
    expect(translate("Desiree")).toBe("esireeday");
    expect(translate("down")).toBe("ownday");
    expect(translate("space")).toBe("acespay");
    expect(translate("school")).toBe("oolschay");
  });
});
