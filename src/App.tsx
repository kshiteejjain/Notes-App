import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import NotesCard from './features/notesCard/notesCard';
import CreateNotes from './features/createNotes/createNotes';
import EditNotes from './features/editNotes/editNotes';

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='navbar'>
        <button className='button-primary' onClick={() => navigate("/")}>Home</button>
        <button className='button-primary' onClick={() => navigate("/CreateNotes")}>Add User</button>
        <button className='button-primary' onClick={() => navigate("/NotesCard")}> Notes</button>
      </div>
      <Routes>
        <Route path="/" element={<NotesCard />} />
        <Route path="/NotesCard" element={<NotesCard />} />
        <Route path="/CreateNotes" element={<CreateNotes />} />
        <Route path="/EditNotes/:id" element={<EditNotes />} />
      </Routes>
    </>
  )
}

export default App
