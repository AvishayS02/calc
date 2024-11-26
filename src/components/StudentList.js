function StudentList({ students }) {
  return (
    <div className="counter">
      <h2>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </h2>
    </div>
  )
}

export default StudentList
