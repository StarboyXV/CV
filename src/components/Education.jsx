import './Education.css'

export function Education() {
  const education = [
    {
      id: 1,
      school: 'North-West University',
      degree: 'Bachelor of Science',
      field: 'Information Technology',
      year: '2019'
    },
    {
      id: 2,
      school: 'Technical High School Sasolburg',
      degree: 'High School Diploma',
      field: 'General Education',
      year: '2015'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        {education.map(edu => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <p className="school">{edu.school}</p>
            <p className="field">{edu.field}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
