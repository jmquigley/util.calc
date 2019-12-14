import calc, {toEM, toREM, unitToNumber} from "./index";

test("Test calc addition", () => {
	expect(calc("20px", "+5")).toBe("25px");
	expect(calc("20.5px", "+5")).toBe("25.5px");
});

test("Test calc subtraction", () => {
	expect(calc("20px", "-5")).toBe("15px");
	expect(calc("20.5px", "-5")).toBe("15.5px");
});

test("Test calc multiplication", () => {
	expect(calc("20px", "*2")).toBe("40px");
	expect(calc("20.25px", "*2")).toBe("40.5px");
});

test("Test calc division", () => {
	expect(calc("20px", "/4")).toBe("5px");
	expect(calc("20.8px", "/4")).toBe("5.2px");
});

test("Test more complex usages of calc function", () => {
	expect(calc("20px", "++2")).toBe("22px");

	expect(calc("20px", "*    1")).toBe("20px");
	expect(calc("20px", "*  -1")).toBe("-20px");

	expect(calc("20", "+ -2")).toBe("18");
	expect(calc("20px", "* 1.5")).toBe("30px");

	expect(calc("20abc", "/4")).toBe("5abc");
});

test("Test bad numbers given to the calc function", () => {
	expect(() => {
		calc("abc", "+x");
	}).toThrow();

	expect(() => {
		calc("20px", "++alksjdflaj");
	}).toThrow();
});

test("Test null value passed to the calc function", () => {
	expect(() => {
		calc(null, "+ 2");
	}).toThrow();

	expect(() => {
		calc("", "+ 2");
	}).toThrow();
});

test("Test valid input, but empty option to calc function", () => {
	expect(calc("80px", null)).toBe("80px");
	expect(calc("80px", "")).toBe("80px");
});

test("Test with a time value", () => {
	expect(calc("0.5s", "* 2")).toBe("1s");
	expect(calc("1.0s", "/ 2")).toBe("0.5s");
});

test("Test with a number value", () => {
	expect(calc(0, "- 1")).toBe("-1");
	expect(calc(-1, "- 1")).toBe("-2");
	expect(calc(1, "- 1")).toBe("0");
});

test("Test converting 80px to rem and em with font size 16", () => {
	expect(toREM("80px")).toBe("5rem");
	expect(toREM(80)).toBe("5rem");
	expect(toEM("80px")).toBe("5em");
	expect(toEM(80)).toBe("5em");
});

test("Test converting 79px to rem and em with font size 16", () => {
	expect(toREM("79px")).toBe("4.938rem");
	expect(toREM(79)).toBe("4.938rem");
	expect(toEM("79px")).toBe("4.938em");
	expect(toEM(79)).toBe("4.938em");
});

test("Test converting 80 px to rem and em with a font size of -16 and precision of -2", () => {
	expect(toREM("80px", -16, -2)).toBe("5rem");
	expect(toREM(80, -16, -2)).toBe("5rem");
	expect(toEM("80px", -16, -2)).toBe("5em");
	expect(toEM(80, -16, -2)).toBe("5em");
});

test("Test bad numbers given to the toEM functions", () => {
	expect(() => {
		toEM("abc");
	}).toThrow();

	expect(() => {
		toEM("");
	}).toThrow();

	expect(() => {
		toEM(null);
	}).toThrow();
});

test("Test bad numbers given to the toREM functions", () => {
	expect(() => {
		toREM("abc");
	}).toThrow();

	expect(() => {
		toREM("");
	}).toThrow();

	expect(() => {
		toREM(null);
	}).toThrow();
});

test("Test bad input type to calc function", () => {
	expect(() => {
		calc(["line-height", "123", "px"]);
	}).toThrow();
});

test("Convert a string with units to a number", () => {
	expect(unitToNumber("24px")).toBe(24);
	expect(unitToNumber("24pc")).toBe(24);
	expect(unitToNumber("24pt")).toBe(24);
	expect(unitToNumber("1.2em")).toBe(1.2);
	expect(unitToNumber("1.55rem")).toBe(1.55);
});

test("Attempt to convert unit string with bad input", () => {
	expect(() => {
		const x = unitToNumber("abcd");
		console.log(x);
	}).toThrow();
});
