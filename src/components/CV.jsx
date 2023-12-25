export default function CV({name, email, phone, school, study, startDate, endDate, company, position, responsibilities, startJob, endJob}){
    return (
        <div className="cv">
            <section className="info">
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </section>
            <section className="education">
                <p>{school}</p>
                <p>{study}</p>
                <p>{startDate + ' - ' + endDate}</p>
            </section>
            <section className="experience">
                <p>{company}</p>
                <p>{position}</p>
                <p>{responsibilities}</p>
                <p>{startJob + ' - ' + endJob}</p>
            </section>
        </div>
    )
}