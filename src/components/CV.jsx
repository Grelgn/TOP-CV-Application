export default function CV({name, email, phone, school, study, startDate, endDate, company, position, responsibilities, startJob, endJob}){
    return (
        <div className="cv">
            <section className="info">
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{phone}</p>
            </section>
            <section className="education">
                <h1>Education</h1>
                <p>{school}</p>
                <p>{study}</p>
                <p>{startDate + ' - ' + endDate}</p>
            </section>
            <section className="experience">
                <h1>Experience</h1>
                <p>{company}</p>
                <p>{position}</p>
                <p>{responsibilities}</p>
                <p>{startJob + ' - ' + endJob}</p>
            </section>
        </div>
    )
}