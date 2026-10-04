export default function DepartmentForm({
    name,
    setName,
    acronym,
    setAcronym,
    handleSubmit,
    error
}) {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar novo Departamento</h2>

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
            <div>
                {error.acronym}
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    );
}