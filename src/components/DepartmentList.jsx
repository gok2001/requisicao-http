export default function DepartmentList({
    departments,
    loading
}) {
    return (
        <div className="card p-4 shadow-sm">
            <h2 className="mb-4">Departamentos cadastrados</h2>

            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">

                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sigla</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading
                        ?
                            <tr>
                                <td colSpan="2" className="text-center">
                                    "Carregando departamentos..."
                                </td>
                            </tr>
                        :
                            departments.map((department) => (
                                <tr key={department.id}>
                                    <td>{department.name}</td>
                                    <td>{department.acronym}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
}