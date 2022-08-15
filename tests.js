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