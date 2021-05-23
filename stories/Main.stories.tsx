import React from 'react';
import MainSection from '../components/sections/Main';

export default {
  title: 'Home Page Sections/Main',
  component: MainSection,
};

export const Default = (): JSX.Element => (
  <MainSection
    onCallToAction={(values): void => {
      alert(values);
    }}
  />
);
