class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

const employee = new Employee('j', 123, 'jlfkjf');
console.log(employee);

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = 'Engineer';
    this.github = github;
  }
}

const engineer = new Engineer('a', 484, 'lkfjljk@email.com', 'somehting');
console.log(engineer);

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = 'Intern';
    this.school = school;
  }
}
