import { useState, useEffect } from 'react';
import DepartmentList from './assets/components/DepartmentList';
import DepartmentForm from './assets/components/DepartmentForm';

const url = "http://localhost:3000/departments";

function App() {

  const [name, setName] = useState("");
  const [acronym, setAcronym] = useState("");

  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const [error, setError] = useState({});

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const res = await fetch(url);
      const data = await res.json();

      setDepartments(data);
      setLoading(false);
    }

    fetchData();
  }, []);

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
    <div>
      <DepartmentForm
        name={name}
        setName={setName}
        acronym={acronym}
        setAcronym={setAcronym}
        handleSubmit={handleSubmit}
        error={error}
      />

      <DepartmentList
        departments={departments}
      />
    </div>
  );
}

export default App
