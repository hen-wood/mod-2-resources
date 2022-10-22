const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word

  beforeEach('Word', () => {
    newInstance = new Word('john')
    // newInstance { name: 'john' }
  })

  describe("Word constructor function", function () {

    it('should have a "name" property', function () {
      expect(newInstance).to.have.keys('name');
    });

    it('should set the "name" property when a new word is created', function () {
      expect(newInstance.name).to.equal('john');
    });
  });

  describe("removeVowels function", function () {
    it("should return a word with all vowels removed", function () {
      expect(newInstance.removeVowels()).to.equal('jhn');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(newInstance.removeConsonants()).to.equal('o');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(newInstance.pigLatin()).to.equal('ohnjay');
    });
  });
});
