import validateBrackets from './bracket-validator';

test.skip("validateBrackets can identify properly balanced brackets", () => {
    expect(validateBrackets("{[()]}")).toBe(true),
    expect(validateBrackets("[[[]]]")).toBe(true)
});

test.skip("validateBrackets can cope with mingled brackets", () => {
    expect(validateBrackets("({[}])")).toBe(false)
})

test.skip("validateBrackets can identify unbalanced brackets", () => {
    expect(validateBrackets("{[[])}")).toBe(false),
    expect(validateBrackets("(((")).toBe(false)
})

test.skip("Validate brackets can cope with single inputs", () =>{
    expect(validateBrackets("[")).toBe(false),
    expect(validateBrackets("}")).toBe(false),
    expect(validateBrackets(")")).toBe(false)
})

test.skip("validateBrackets can identify multiple children, or adjacent bracket systems", () => {
    expect(validateBrackets("{[]()}")).toBe(true),
    expect(validateBrackets("(()())")).toBe(true),
    expect(validateBrackets("{[()()][]{[][]}}")).toBe(true)
})