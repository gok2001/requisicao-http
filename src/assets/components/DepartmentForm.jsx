export default function DepartmentForm({
    name,
    setName,
    acronym,
    setAcronym
}) {
    return (
        <div>
            <form>
                <label htmlFor="name">Nome do Departamento</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="acronym">Sigla</label>
                <input
                    type="text"
                    name="acronym"
                    id="acronym"
                    value={acronym}
                    onChange={(e) => setAcronym(e.target.value)}
                />
            </form>
        </div>
    );
}