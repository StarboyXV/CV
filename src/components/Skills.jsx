import './Skills.css'

export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C#', 'VB(KCML)', 'JAVA', 'React']
    },
    {
      category: 'Mobile Development',
      skills: ['Xamarin.Android', '.NET MAUI']
    },
    {
      category: 'Backend & Web Technologies',
      skills: ['ASP.NET WEB Services', 'SOAP APIs']
    },
    {
        category: 'Database Management',
        skills: ['SQL Server', 'Entity Framework']
    },
    {
        category: 'Tools & Practices',
        skills: ['Git', 'Agile/Scrum', 'SLDC, Jira']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category">
              <h3>{cat.category}</h3>
              <ul>
                {cat.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
