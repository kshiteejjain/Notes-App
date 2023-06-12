import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from "../../app/store";
import trash from "../../assets/trash.svg"
import edit from "../../assets/edit.svg"
import { deleteNotes } from '../createNotes/createNotesSlice';

const NotesCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notesData } = useSelector((state: RootState) => ({ notesData: state.reducer?.notesList }));



  const handleDeleteNote = (id: any) => {
    dispatch(deleteNotes(id));
  };


  return (
    <div className='flex'>
      {notesData.length === 0 ? 'No Notes' : null}
      {notesData?.map((item: any, id) => {
        return (
          <div className='notesCard' key={item.id}>
            <label><span>{item?.title}</span></label>
            <p className='description'><span> {item?.description}</span></p>
            <p className='createdDate'>Created: {item?.createdDate}</p>
            <div className='actions'>
              <button onClick={() => navigate(`/EditNotes/${item.id}`)} title='Edit Notes'> <img src={edit} alt='Edit Notes' title='Edit Notes' /> </button>
              <button onClick={() => handleDeleteNote(id)} title='Delete Notes'> <img src={trash} alt='Delete Notes' title='Delete Notes' /> </button>
            </div>
          </div>
        )
      }).reverse()}
    </div>
  )
}

export default NotesCard;
