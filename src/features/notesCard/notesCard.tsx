import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../app/store";
import trash from "../../assets/trash.svg"
import { deleteNotes } from '../createNotes/createNotesSlice';

const NotesCard = () => {
  const dispatch = useDispatch();
  const { notesData } = useSelector((state: RootState) => ({ notesData: state.reducer?.notesList }));



  const handleDeleteNote = (id: any) => {
    dispatch(deleteNotes(id));
  };


  return (
    <div className='flex'>
      {notesData?.map((item: any, id) => {
        return (
          <div className='notesCard' key={id}>
            <label><span>{item?.title}</span></label>
            <p className='description'><span> {item?.description}</span></p>
            <p className='createdDate'>Created: {item?.createdDate}</p>
            <button className='deleteIcon' onClick={() => handleDeleteNote(id)}> <img src={trash} /> </button>
          </div>
        )
      })}
    </div>
  )
}

export default NotesCard;
