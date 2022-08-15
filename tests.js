// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe('function')
    })
    it('should return a string when it is called', function(){
        expect(typeof sayHello()).toBe('string')
    })
    it(`should return "Hello, {argument}`, function(){
        expect(sayHello(name)).toBe(`Hello, ${name}!`)
    })
    it('should ignore any true/false statements', function(){
        expect(sayHello(false) || sayHello(true)).toBe('Hello, World!')
    })
    it('should return "not accepted" if null', function(){
        expect(sayHello(null)).toBe("not accepted")
    })
})

describe('isFive', function (){
    it('should be of type function', function (){
        expect(typeof isFive).toBe('function')
    })
    it('should return a type boolean', function(){
        expect(typeof isFive()).toBe('boolean')
    })
    it('should accept "5" as an input', function(){
        expect(isFive("5")).toBe(true)
    })
})

describe('isEven', function(){
    it('should be a function type', function(){
        expect(typeof isEven).toBe('function')
    })
    it('should return true if given a value of 2', function(){
        expect(isEven(2)).toBe(true)
    })
    it('should return true if -4 is passed', function(){
        expect(isEven(-4)).toBe(true)
    })
    it('should return false if 3 is passed', function(){
        expect(isEven(3)).toBe(false)
    })
    it('should return false if "bananna" is passed', function (){
        expect(isEven("bananna")).toBe(false)
    })
    it('should return true if 8 is passed', function(){
        expect(isEven(8)).toBe(true)
    })
    it('should return false if Infinity is passed', function(){
        expect(isEven(Infinity)).toBe(false)
    })
    it('should return false if true/false is passed', function(){
        expect(isEven(true) || isEven(false)).toBe(false)
    })
    it('should return false if null is passed', function () {
        expect(isEven()).toBe(false)
    });
})

describe('isVowel', function(){
    it('should be a defined function', function(){
        expect(typeof isVowel).toBe('function')
    })
    it('should return a boolean', function(){
        expect(typeof  isVowel()).toBe('boolean')
    })
    it('should return true if A is passed', function () {
        expect(isVowel('A')).toBe(true)
    });
    it('should return true if a is passed', function () {
        expect(isVowel('a')).toBe(true)
    });
    it('should return false if y is passed', function () {
        expect(isVowel('y')).toBe(false)
    });
    it('should return false if true/false is used', function () {
        expect(isVowel(true) || isVowel(false)).toBe(false)
    });
    it('should return false if banana is passed', function () {
        expect(isVowel('banana')).toBe(false)
    });
    it('should return false if value is null', function () {
        expect(isVowel()).toBe(false)
    });
})