import { useDispatch } from 'react-redux';
import { addNotes } from './createNotesSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Notes = () => {
  const [values, setValues] = useState({ title: '', description: '', createdDate: '' });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  }

  const createdDate = new Date().toLocaleString();

  const formSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (values.title === '' || values.description === '') {
      setError(true);
      return
    }
    setValues({ title: '', description: '', createdDate: '' });
    dispatch(addNotes({
      id: uuidv4(),
      title: values.title,
      description: values.description,
      createdDate: createdDate
    }));
    navigate("/");
  };

  return (
    <div className='flex'>
      <form className='card' onSubmit={formSubmit}>
        <input type='text' name='title' value={values.title} placeholder='Add Title' onChange={handleChange} />
        <textarea rows={5} name='description' value={values.description} className='description' onChange={handleChange} placeholder='Add Description'></textarea>
        <button type='submit' className='addButton'>Add Notes</button>
        {error && <p className="error">All Mandatory Fields Are Required.</p>}
      </form>
    </div>
  )
}

export default Notes;
