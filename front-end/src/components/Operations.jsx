import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from './NavigationBar';
import axios from 'axios';

function Operations() {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
    accept: false,
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.amount || !formData.category || !formData.date) {
      setError('All fields are required.');
      return;
    }

    if (!formData.accept) {
      setError('You must accept to add the operation.');
      return;
    }

    setError('');
    setSuccessMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log(JSON.stringify({
        title: formData.title,
        amount: parseFloat(formData.amount),
        category: formData.category,
        date: formData.date,
      }));

      const { accept, ...dataToSend } = formData; // Exclure 'accept'

      const response = await axios.post(apiUrl, dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccessMessage('Operation added successfully!');
      setFormData({
        title: '',
        amount: '',
        category: '',
        date: '',
        accept: false,
      });
    } catch (error) {
      console.error('Error submitting operation:', error);
      setError('An error occurred while adding the operation.');
    }
  };

  return (
    <>
      <NavigationBar />
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              placeholder="Add a title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              name="amount"
              type="number"
              placeholder="Add an amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Choose a category</Form.Label>
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Fun">Fun</option>
              <option value="Daily expenses">Daily expenses</option>
              <option value="Transport">Transport</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              name="accept"
              type="checkbox"
              label="I accept to add it"
              checked={formData.accept}
              onChange={handleChange}
            />
          </Form.Group>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </>
  );
}

export default Operations;
