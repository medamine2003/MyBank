import React from 'react'
import NavigationBar from './NavigationBar'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [operations, setOperations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Récupérer les opérations depuis l'API Symfony
        axios.get('http://localhost:8000/api/operations') // Changez l'URL si nécessaire
            .then(response => {
                setOperations(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the operations!", error);
            });
    }, []);

    
    
  return (
    <>
      <NavigationBar/>
      <Link to="/operations">
        <Button>Add an Operation</Button>
      </Link>
      <div>
            <h1>Operations</h1>
            <ul>
                {operations.map(operation => (
                    <li key={operation.id}>
                        {operation.title} - {operation.amount} - {operation.date} - {operation.category}
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Home
/*// src/components/Operations.js


function Operations() {
    

    return (
        
    );
}

export default Operations;
 */