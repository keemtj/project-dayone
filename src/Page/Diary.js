import React from 'react';
import DiaryForm from '../Components/Diary/DiaryForm';
import { DiaryProvider } from '../Context/DiaryContext';
import DiaryModal from '../Components/DiaryModal';
import DiaryModalSmall from '../Components/DiaryModalSmall';

const Diary = () => {
  return (
    <main>
      <DiaryProvider>
        <DiaryForm />
        <DiaryModal />
        <DiaryModalSmall />
      </DiaryProvider>
    </main>
  );
};

export default Diary;
