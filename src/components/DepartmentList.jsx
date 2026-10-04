export default function DepartmentList({
    departments,
    loading
}) {
    return (
        <div>
            <div>
                <h2>Departamentos cadastrados</h2>
            </div>

            <div>
                <table>

                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sigla</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading
                        ?
                            "Carregando departamentos..."
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