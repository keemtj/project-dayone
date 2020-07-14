import React, { useEffect, useContext } from 'react';
import DiaryForm from '../Components/Diary/DiaryForm';
import { DiaryProvider } from '../Context/DiaryContext';
import DiaryModal from '../Components/DiaryModal';
import DiaryModalSmall from '../Components/DiaryModalSmall';
import { MainContext } from '../Context/MainContext';

const Diary = () => {
  const { clearCurrentDiary } = useContext(MainContext);
  useEffect(() => {
    return () => {
      clearCurrentDiary();
    };
  }, []);

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
