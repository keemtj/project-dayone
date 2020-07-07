import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Map.module.scss';
import ReactMap from '../Components/ReactMap';
import DiarySublist from '../Components/DiarySublist';

const cx = classNames.bind(styles);

const diaries = [
  {
    _id: 1,
    id: 1,
    title: 'Diary Title 1',
    content: 'This is diary 1',
    date: '2020/03/02',
    location: { lat: 37.62197524055062, lng: 127.16017523675508 },
    imagePaths: [
      'https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102',
      'https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102',
    ],
    isBookmarked: true,
  },
  {
    _id: 1,
    id: 2,
    title: 'Diary Title 2',
    content: 'This is diary 2',
    date: '2020/04/17',
    location: { lat: 37.620842424005616, lng: 127.1583774403176 },
    imagePaths: [],
    isBookmarked: false,
  },
  {
    _id: 1,
    id: 3,
    title: 'Diary Title 3',
    content: 'This is diary 3',
    date: '2020/04/21',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 2,
    id: 4,
    title: 'Diary Title 4',
    content: 'This is diary 4',
    date: '2020/04/25',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 3,
    id: 5,
    title: 'Diary Title 5',
    content: 'This is diary 5',
    date: '2020/04/28',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 4,
    id: 6,
    title: 'Diary Title 6',
    content: 'This is diary 6',
    date: '2020/05/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 2,
    id: 7,
    title: 'Diary Title 7',
    content: 'This is diary 7',
    date: '2020/05/02',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 1,
    id: 8,
    title: 'Diary Title 8',
    content: 'This is diary 8',
    date: '2020/06/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 3,
    id: 9,
    title: 'Diary Title 9',
    content: 'This is diary 9',
    date: '2020/07/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 4,
    id: 10,
    title: 'Diary Title 10',
    content: 'This is diary 10',
    date: '2020/07/04',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 4,
    id: 11,
    title: 'Diary Title 11',
    content: 'This is diary 11',
    date: '2020/07/05',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
];

const Map = () => {
  const [sublist, setSublist] = useState([]);
  // lat, lng => return arr
  const filterDiariesByLoc = (lat, lng) => {
    setSublist(
      diaries.filter(
        ({ location }) => location.lat === lat && location.lng === lng,
      ),
    );
  };

  return (
    <main className={cx('main')}>
      {/* <h1>지도</h1> */}
      <ReactMap
        className={cx('map')}
        diaries={diaries}
        filterDiariesByLoc={filterDiariesByLoc}
      />
      {/* <DiarySublist sublist={sublist} /> */}
    </main>
  );
};

export default Map;
