import { Person, Student, Teacher } from './classes/PersonClasses';
import PersonCard from './PersonCard';
import './App.css';

function App() {
  const basePerson = new Person("Ajay Pratap Devra", 21, "ajay.devra@university.edu");
  const students = [
    new Student("Anya Sharma", 20, "anya.s@cs.edu", "U48123", "Computer Science"),
    new Student("Rahul Malhotra", 22, "r.malhotra@lit.edu", "U49551", "English Literature")
  ];
  const teachers = [
    new Teacher("Dr. Vikram Seth", 45, "v.seth@staff.edu", "Applied Mathematics", 85000),
    new Teacher("Prof. Sarah Jones", 38, "s.jones@staff.edu", "Full Stack Development", 92000)
  ];

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Class Hierarchy System</h1>
        <p>Real-world OOP Demonstration</p>
      </header>

      <section className="hierarchy-level top">
        <h2 className="level-title">Level 1: Base Class</h2>
        <div className="card-grid">
          <PersonCard person={basePerson} />
        </div>
      </section>

      <div className="connector">↓</div>

      <section className="hierarchy-level mid">
        <h2 className="level-title">Level 2: Subclasses</h2>
        <div className="card-grid">
          {students.map((s, i) => <PersonCard key={i} person={s} />)}
        </div>
      </section>

      <div className="connector">↓</div>

      <section className="hierarchy-level bottom">
        <h2 className="level-title">Level 3: Specific Roles</h2>
        <div className="card-grid">
          {teachers.map((t, i) => <PersonCard key={i} person={t} />)}
        </div>
      </section>
    </div>
  );
}
export default App;