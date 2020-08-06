class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

}

const user = new User('abc')


user.name = 'google'

console.log(user.name);
