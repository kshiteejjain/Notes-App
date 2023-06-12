import { useDispatch, useSelector } from 'react-redux';
import { editNotes } from '../createNotes/createNotesSlice';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../app/store';

const Notes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  type NotesDetails = {
    title: string;
    description: string;
  };

  const { notesData } = useSelector((state: RootState) => ({ notesData: state.reducer?.notesList }));

  const existingNotes = notesData.filter((item: any) => item.id === params.id)

  const {title, description} = existingNotes[0] as unknown as NotesDetails;

  const [values, setValues] = useState({ title, description });

  const [error, setError] = useState(false);


  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  }

  const formSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (values.title === '' || values.description === '') {
      setError(true);
      return
    }
    setValues({ title: '', description: '', });
    dispatch(editNotes({
      id: params.id,
      title: values.title,
      description: values.description
    }));
    navigate("/");
  };
  

  return (
    <div className='flex'>
      <form className='card' onSubmit={formSubmit}>
        <input type='text' name='title' value={values.title} placeholder='Add Title' onChange={handleChange} />
        <textarea rows={5} name='description' value={values.description} className='description' onChange={handleChange} placeholder='Add Description'></textarea>
        <button type='submit' className='addButton'>Update Notes</button>
        {error && <p className="error">All Mandatory Fields Are Required.</p>}
      </form>
    </div>
  )
}

export default Notes;
