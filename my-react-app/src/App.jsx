import { Student, Teacher } from "./models/Person";
import PersonCard from "./assets/components/PersonCard";

function App() {
  const people = [
    new Student("Tannu", 20, "A"),
    new Teacher("Mr. Sharma", 40, "Mathematics"),
    new Student("Rahul", 22, "B+"),
    new Teacher("Ms. Meena", 35, "Physics"),
  ];

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </div>
  );
}

const appStyle = {
  minHeight: "100vh",
  width: "100%",
  padding: "40px",
  textAlign: "center",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  color: "white",
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "30px",
  letterSpacing: "1px",
};

export default App;
