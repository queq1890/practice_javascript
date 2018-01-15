class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstname;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastname;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member('吉田','ほげ');
console.log(m.getName());
