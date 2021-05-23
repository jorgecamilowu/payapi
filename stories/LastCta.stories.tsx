import React from 'react';
import LastCta from '../components/sections/LastCta';

export default {
  title: 'Home Page Sections/Last Call to Action',
  component: LastCta,
};

export const Default = (): JSX.Element => (
  <LastCta
    onCTA={(): void => {
      // empty func
    }}
  />
);
