import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} />
          <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          <label>Province</label>
          <select name="province" value={formData.province} onChange={handleChange}>
            <option value="">Choose...</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            <option value="British Columbia">British Columbia</option>
            {/* Add more provinces as needed */}
          </select>
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
            Agree Terms & Condition?
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
        <h2>Submitted Information</h2>
        <p><strong>Email:</strong> {submittedData.email}</p>
        <p><strong>Full Name:</strong> {submittedData.fullName}</p>
        <p><strong>Address:</strong> {submittedData.address}</p>
        <p><strong>City:</strong> {submittedData.city}</p>
        <p><strong>Province:</strong> {submittedData.province}</p>
        <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
      </div>
      )}
    </div>
  );
}

export default App;
