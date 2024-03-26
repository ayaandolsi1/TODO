import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, updateItem, deleteItem } from './action';
import './Sample.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const SampleComponent = ({ list, addItem, updateItem, deleteItem }) => {
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('You must enter a message');
    } else {
      setErrorMessage('');
      if (editIndex !== null) {
        updateItem(editIndex, inputValue);
        setEditIndex(null);
      } else {
        addItem(inputValue);
      }
      setInputValue('');
    }
  };

  const handleEdit = (index) => {
    setInputValue(list[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    deleteItem(index);
  };

  return (
    <div className="centered-container">
      <div className="sample-component">
        <h2>TO DO</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text"
        />
        <button className="add-button" onClick={handleAdd}>{editIndex !== null ? 'Update' : 'Add'}</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <input type="text" value={item} readOnly />
              <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.list
});

export default connect(mapStateToProps, { addItem, updateItem, deleteItem })(SampleComponent);
