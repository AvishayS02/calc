import { useState } from "react"
import "./App.css"
import "./Calc.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import StudentForm from "./components/StudentForm"
import StudentList from "./components/StudentList"
import FullCalculator from "./components/FullCalculator"

function App() {
  const [students, setStudents] = useState([])
  return (
    <>
      <Header />
      <FullCalculator/>
      <StudentForm students={students} setStudents={setStudents} />
      <StudentList students={students} />
      <StudentList students={students} />
      <Footer />
    </>
  )
}

export default App
