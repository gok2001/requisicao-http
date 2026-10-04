import { useState, useEffect } from 'react';
import DepartmentList from './assets/components/DepartmentList';

function App() {
  const [name, setName] = useState("");
  const [acronym, setAcronym] = useState("");

  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  return (
    <div>
      <DepartmentList
        departments={departments}
      />
    </div>
  );
}

export default App
