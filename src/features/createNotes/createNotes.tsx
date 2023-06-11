import { useDispatch } from 'react-redux';
import { addNotes, deleteNotes } from './createNotesSlice';
import { useState } from 'react';
import NotesCard from '../notesCard/notesCard';

const Notes = () => {
  const [values, setValues] = useState({ title: '', description: '', createdDate: '' });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  }

  const createdDate = new Date().toLocaleDateString();

  const formSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (values.title === '' || values.description === '') {
      setError(true);
      return
    }
    setValues({ title: '', description: '', createdDate: '' });
    dispatch(addNotes({
      title: values.title,
      description: values.description,
      createdDate: createdDate
    }));
  };

  const handleDeleteNote = (id: any) => {
    dispatch(deleteNotes(id));
  };


  return (
    <div className='flex'>
      <form className='card' onSubmit={formSubmit}>
        <input type='text' name='title' value={values.title} placeholder='Add Title' onChange={handleChange} />
        <textarea rows={5} name='description' value={values.description} className='description' onChange={handleChange} placeholder='Add Description'></textarea>
        <button type='submit' className='addButton'>Add Notes</button>
        {error && <p className="error">All Mandatory Fields Are Required.</p>}
      </form>
      <NotesCard />
    </div>
  )
}

export default Notes;
