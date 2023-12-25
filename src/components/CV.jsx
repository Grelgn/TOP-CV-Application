export default function CV({name, email, phone}){
    return (
        <div className="cv">
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}