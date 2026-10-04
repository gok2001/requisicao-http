import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [acronym, setAcronym] = useState("");

  const [departments, setDepartments] = useState([]);

  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
}

export default App
