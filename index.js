class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error ('OutOfBounds');
    } else {
    return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    }else {
        return Math.max(...this.items);
      
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    }else {
      return Math.min(...this.items)
  }
}

  sum() {
    let arrSum = 0;
    if (this.length === 0) {
      return 0;
    }else {
    for(let i = 0; i < this.items.length; i++) {
      return arrSum += this.items[i];
  /* return this.items.reduce((acc, current)=> acc + current) */
  }
}

  avg() {}
}

module.exports = SortedList;
