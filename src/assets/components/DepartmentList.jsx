export default function DepartmentList({ departments }) {
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
                        {departments.map((department) => (
                            <tr key={department.id}>
                                <td>{department.name}</td>
                                <td>{department.acronym}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}