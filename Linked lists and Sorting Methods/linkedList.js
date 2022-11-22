class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  prepend(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
  }

  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    let temp = this.head;
    if (temp) {
      while (temp.next) {
        temp = temp.next;
      }
    }
    return temp.value;
  }

  at(index) {
    let temp = this.head;
    let count = 1;

    while (temp.next !== null && count != index) {
      temp = temp.next;
      count++;
    }
    return temp.value;
  }

  pop() {
    let temp = this.head;

    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  contains(value) {
    let temp = this.head;
    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.next;
    }
    return false;
  }

  clear() {
    this.head = null;
  }

  find(value) {
    let temp = this.head;
    let index = 0;

    while (temp != null) {
      if (temp.value === value) return index;
      index++;
      temp = temp.next;
    }

    return null;
  }

  toString() {
    let temp = this.head;
    let str = "";

    while (temp != null) {
      str += `(${temp.value}) -> `;
      temp = temp.next;
    }

    return (str += "(null)");
  }

  insertAt(value, index) {
    let temp = this.head;
    let tempNext;
    let count = 1;
    let node = new Node(value);

    if (index == 0) {
      node.next = temp;
      temp = node;
      return;
    }
    while (temp != null) {
      if (count == index) {
        tempNext = temp.next;
        temp.next = node;
        node.next = tempNext;
        return;
      }
      count++;
      temp = temp.next;
    }
  }

  removeAt(index) {
    let temp = this.head;
    let i = 0;
    if (!this.head) return null;
    if (index === 0) this.head = this.head.next;
    while (temp) {
      if (i === index - 1) {
        temp.next = temp.next.next;
      }
      i += 1;
      temp = temp.next;
    }
  }
}

//let node1 = new Node(2);
//let node2 = new Node(76);

let list = new LinkedList();

//node1.next = node2;
list.append("first");
list.append(1);
list.append(76);
list.append(19);
list.append(99);
list.prepend("before");
//list.pop();
list.insertAt("inserted", 3);
list.removeAt(1);

console.log(list);
console.log(`The size of the list: ${list.size()}`);
console.log(`The Head: ${list.getHead()}`);
console.log(`The Tail: ${list.getTail()}`);
console.log(`Using the num at(3) index: ${list.at(3)}`);
console.log(`Using find(99): ${list.find(99)}`);
console.log(`Does the list contain the number 15: ${list.contains(15)}`);
console.log(`Does the list contain the number 76: ${list.contains(76)}`);
console.log(`toString method print out: ${list.toString()}`);
