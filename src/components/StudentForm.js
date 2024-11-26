import { useState } from "react"

function StudentForm({ students, setStudents }) {
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [age, setAge] = useState(0)

  function checkAndSetAge(e) {
    if (Number(e.target.value) < 100) {
      setAge(Number(e.target.value))
    } else {
      setAge(100)
    }
  }

  function submitStudent() {
    if (age > 20 && city === "Tel Aviv") {
      if (!students.includes(name)) {
        const newStudents = students.slice()
        newStudents.push(name)
        setStudents(newStudents)
      }
    }
  }
  return (
    <div className="counter">
      Name:
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      City:
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <br />
      Age:
      <input value={age} onChange={checkAndSetAge} />
      <br />
      <button onClick={submitStudent}>Sumbit</button>
    </div>
  )
}

export default StudentForm
