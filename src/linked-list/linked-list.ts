class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }


  function parse(string:string):Node {
    return string==="null" ? null : new Node(parseInt(string), parse(string.slice(string.indexOf("->")+3)))
  }

console.log(parse("1 -> 2 -> 3 -> null"))