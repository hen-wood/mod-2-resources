class Word {
  constructor(name) {
    this.name = name;
  }

  removeVowels() {
    let vowels = "aeiouAEIOU";
    let newWord = "";
    for (let i = 0; i < this.name.length; i++) {
      let char = this.name[i];
      if (!vowels.includes(char)) {
        newWord += char;
      }
    }
    return newWord;
  }

  removeConsonants() {
    let vowels = "aeiouAEIOU";
    let newWord = "";
    for (let i = 0; i < this.name.length; i++) {
      let char = this.name[i];
      if (vowels.includes(char)) {
        newWord += char;
      }
    }
    return newWord;
  }

  pigLatin() {
    let vowels = "aeiouAEIOU";

    if (vowels.includes(this.name[0])) {
      return this.name + "yay";
    }

    for (let i = 0; i < this.name.length; i++) {
      let char = this.name[i];
      if (vowels.includes(char)) {
        let first_half = this.name.slice(0, i);
        let second_half = this.name.slice(i);
        return second_half + first_half + "ay";
      }
    }
  }
}

module.exports = { Word };
