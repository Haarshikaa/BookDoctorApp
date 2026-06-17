import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const bookAppointment = (doctor) => {
    if (!name || !date) {
      alert("Please enter your name and select a date");
      return;
    }

    setMessage(
      `✅ Appointment booked for ${name} with ${doctor} on ${date}`
    );
  };

  return (
    <div className="container">
    <nav
  style={{
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-around",
    fontWeight: "bold",
  }}
>
  <span>🏠 Home</span>
  <span>👨‍⚕️ Doctors</span>
  <span>📅 Appointments</span>
  <span>📞 Contact</span>
</nav>
      <h1>🏥 Book Doctor App</h1>
       
      <p className="subtitle">
        Find the Best Doctors and Book Appointments Instantly
      </p>

      <div className="form-section">
        <input
          type="text"
          placeholder="Enter Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="doctor-container">

        <div className="card">
          <div className="doctor-image">👨‍⚕️</div>
          <h2>Dr. Ravi</h2>
          <p>Cardiologist</p>

          <button onClick={() => bookAppointment("Dr. Ravi")}>
            Book Appointment
          </button>

          <button onClick={() => alert("10+ Years Experience")}>
            View Profile
          </button>
        </div>

        <div className="card">
          <div className="doctor-image">👩‍⚕️</div>
          <h2>Dr. Priya</h2>
          <p>Dermatologist</p>

          <button onClick={() => bookAppointment("Dr. Priya")}>
            Book Appointment
          </button>

          <button onClick={() => alert("8+ Years Experience")}>
            View Profile
          </button>
        </div>

        <div className="card">
          <div className="doctor-image">🦷</div>
          <h2>Dr. Kiran</h2>
          <p>Dentist</p>

          <button onClick={() => bookAppointment("Dr. Kiran")}>
            Book Appointment
          </button>

          <button onClick={() => alert("Expert Dental Surgeon")}>
            View Profile
          </button>
        </div>

      </div>

      <div className="success">{message}</div>
<footer
  style={{
    textAlign: "center",
    color: "white",
    marginTop: "40px",
    fontSize: "18px",
  }}
>
  © 2026 Book Doctor App </footer>
    </div>
  );
}

export default App;