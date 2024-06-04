class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // * create the set and get methods

  set(key, val) {
    const address = this._hash(key);
    if (!this.data[address]) {
      // * instead of using link lists for now to duel with collision we can use nested array to duel with that of course this is not perfect but just for explore purpose
      this.data[address] = [];

      this.data[address].push([key, val]);
    } else {
      this.data[address].push([key, val]);
    }
  }

  get(key) {
    const address = this._hash(key);
    const arrResult = this.data[address];
    const arrLength = arrResult?.length;

    if (!arrLength) return;
    if (arrLength === 1) return arrResult[0][1];

    // * in the case collision
    for (let i = 0; i < arrLength; i++) {
      // * this is why if we have collision we have O of n right
      if (arrResult[i][0] === key) return arrResult[i][1];
    }
  }
  // [undefined, [[a, 1]], [[b,2], [c,3]]]
  keys() {
    const resultKeys = [];

    if (!this.data.length) return resultKeys;

    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]?.length) continue;

      if (this.data[i].length === 1) {
        resultKeys.push(this.data[i][0][0]);
        continue;
      }

      for (let j = 0; j < this.data[i].length; j++) {
        resultKeys.push(this.data[i][j][0]);
      }
    }
    return resultKeys;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
// myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("apples_1"));
console.log(myHashTable.data);

console.log(myHashTable.keys());
