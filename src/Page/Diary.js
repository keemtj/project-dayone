import React from 'react';
import DiaryForm from '../Components/Diary/DiaryForm';
import Modal from '../Components/Modal';
import { DiaryProvider } from '../Context/DiaryContext';

const Diary = ({ history }) => {
  return (
    <main>
      <DiaryProvider history={history}>
        <DiaryForm />
        <Modal />
      </DiaryProvider>
    </main>
  );
};

export default Diary;
