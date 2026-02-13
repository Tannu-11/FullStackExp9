export class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.role = "General Person";
  }
  getDetails() { return `Age: ${this.age}`; }
  sayHello() { return `Hello, I am ${this.name}.`; }
}

export class Student extends Person {
  constructor(name, age, email, studentId, major) {
    super(name, age, email);
    this.studentId = studentId;
    this.major = major;
    this.role = "Student";
  }
  getDetails() { return `ID: ${this.studentId} | Major: ${this.major}`; }
}

export class Teacher extends Person {
  constructor(name, age, email, subject, salary) {
    super(name, age, email);
    this.subject = subject;
    this.salary = salary;
    this.role = "Teacher";
  }
  getDetails() { return `Subject: ${this.subject} | Salary: $${this.salary}`; }
}