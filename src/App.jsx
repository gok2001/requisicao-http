import { useState } from 'react';
import DepartmentList from './components/DepartmentList';
import DepartmentForm from './components/DepartmentForm';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/departments";

function App() {

  const [name, setName] = useState("");
  const [acronym, setAcronym] = useState("");

  const [sending, setSending] = useState(false);

  const [error, setError] = useState({});

  const { data: departments, setData: setDepartments, loading } = useFetch(url);

  async function handleSubmit(e) {
    e.preventDefault();

    const error = validate();

    if (Object.keys(error).length > 0) {
      return;
    }

    setSending(true);

    const department = {
      name,
      acronym
    }

    const res = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(department)
      }
    );

    const addedDepartment = await res.json();

    setDepartments((prev) => [...prev, addedDepartment]);

    setName("");
    setAcronym("");

    setSending(false);
  }

  function validate() {
    const error = {};

    if (acronym.length < 2 || acronym.length > 5) {
      error.acronym = "Sigla deve ter de 2 a 5 caracteres";
    }

    setError(error);

    return error;
  }

  return (
    <div className="container py-5">
      <DepartmentForm
        name={name}
        setName={setName}
        acronym={acronym}
        setAcronym={setAcronym}
        sending={sending}
        handleSubmit={handleSubmit}
        error={error}
      />

      <DepartmentList
        departments={departments}
        loading={loading}
      />
    </div>
  );
}

export default App
