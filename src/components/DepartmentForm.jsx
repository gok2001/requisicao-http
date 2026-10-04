export default function DepartmentForm({
    name,
    setName,
    acronym,
    setAcronym,
    sending,
    handleSubmit,
    error
}) {
    return (
        <form
            onSubmit={handleSubmit}
            className="cart p-4 shadow-sm mb-4"
        >
            <h2 className="mb-4">Cadastrar novo Departamento</h2>

            <label
                htmlFor="name"
                className="form-label"
            >
                Nome do Departamento
            </label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-3"
            />

            <label
                htmlFor="acronym"
                className="form-label"
            >
                Sigla
            </label>
            <input
                type="text"
                name="acronym"
                id="acronym"
                value={acronym}
                onChange={(e) => setAcronym(e.target.value)}
                className={`form-control ${error.acronym ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">
                {error.acronym}
            </div>

            <button
                type="submit"
                disabled={sending}
                className="btn btn-primary mt-4"
            >
                {sending ? "Enviando..." : "Cadastrar"}
            </button>
        </form>
    );
}