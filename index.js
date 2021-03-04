class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let sum = 0;
    for(let side of this.sides) {
      sum += side
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let s1 = this.sides[0];
    let s2 = this.sides[1];
    let s3 = this.sides[2];
    if((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1)) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let s1 = this.sides[0];
    let s2 = this.sides[1];
    let s3 = this.sides[2];
    let s4 = this.sides[3];

    if((s1 === s2) && (s2 === s3) && (s3 === s4) ) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    let s1 = this.sides[0];
    return s1 * s1;
  }
}