import { useState, useEffect } from 'react';
import DepartmentList from './assets/components/DepartmentList';

function App() {
  const url = "http://localhost:3000/departments";

  const [name, setName] = useState("");
  const [acronym, setAcronym] = useState("");

  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const res = await fetch(url);
      const data = await res.json();

      setDepartments(data);
      setLoading(false);
    }

    fetchData();
  }, [url]);

  return (
    <div>
      <DepartmentList
        departments={departments}
      />
    </div>
  );
}

export default App
