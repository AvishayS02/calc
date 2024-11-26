import { useState } from "react"

function StudentForm() {
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [age, setAge] = useState(0)
  const [accepted, setAccepted] = useState("")

  function checkAndSetAge(e) {
    if (Number(e.target.value) < 100) {
      setAge(Number(e.target.value))
    } else {
      setAge(100)
    }
  }

  function submitStudent() {
    if (age > 20 && city === "Tel Aviv") {
      setAccepted("Accepted")
    } else {
      setAccepted("Sorry, not Accepted")
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
      <h2>{accepted}</h2>
    </div>
  )
}

export default StudentForm
