class LinkedList{
  constructor(){
    this.head = null;
    this.size = 20;
  }

  add(element){
    let node = new Node(element)

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  insertAt(element, index) { 
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let node = new Node(element);
      let current = this.head;
      let previous;

      if (index === 0){
        node.next = head;
        this.head = node;
      } else {
        current = this.head;
        var it = 0;

        while (it < index){
          it++
          previous = current;
          current = current.next;
        }

        node.next = current; 
        previous.next = node; 
      }
      this.size++
    }
    
  } 
}

class Node{
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

let linkedList = new LinkedList();
let number1 = 1
let number2 = 2
let number3 = 3

linkedList.add(number1)
linkedList.add(number2)
linkedList.insertAt(number3, 1)

console.log(linkedList.head);