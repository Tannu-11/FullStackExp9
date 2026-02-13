// Base Class
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student Class (Inheritance)
export class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method Overriding
  getDetails() {
    return `Student - Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Teacher Class (Inheritance)
export class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  getDetails() {
    return `Teacher - Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}
