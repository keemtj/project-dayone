import React from 'react';
import DiaryForm from '../Components/Diary/DiaryForm';
import Modal from '../Components/Modal';
import { DiaryProvider } from '../Context/DiaryContext';
import ModalSmall from '../Components/ModalSmall';

const Diary = ({ history }) => {
  return (
    <main>
      <DiaryProvider history={history}>
        <DiaryForm />
        <Modal />
        <ModalSmall />
      </DiaryProvider>
    </main>
  );
};

export default Diary;
