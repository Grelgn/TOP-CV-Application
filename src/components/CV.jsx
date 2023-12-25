export default function CV({name, email, phone, school, study, startDate, endDate}){
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
        </div>
    )
}