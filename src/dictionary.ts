interface CallBack<T, U> {
  (key: T, value: U): void
}

export class Dictionary<K, V> {
  private _key: K[] = [];
  private _value: V[] = [];

  get size() {
    return this._key.length
  }

  set(key: K, value: V) {
    const i = this._key.indexOf(key);
    if (i < 0) {
      this._key.push(key);
      this._value.push(value);
    } else {
      this._value[i] = value;
    }
  }

  forEach(callBack: CallBack<K, V>) {
    this._key.forEach((item, index) => {
      const key = item;
      const value = this._value[index];
      callBack(key, value);
    })
  }

  has(key: K) {
    return this._key.includes(key)
  }

  delete(key: K) {
    const i = this._key.indexOf(key);
    if (i < 0) {
      return;
    }
    this._key.splice(i, 1);
    this._value.splice(i, 1);
  }
}