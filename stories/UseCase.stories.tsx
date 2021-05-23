import React from 'react';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import UseCase from '../components/UseCase';

export default {
  title: 'Components/Use Case column',
  component: UseCase,
};

export const Default = (): JSX.Element => (
  <Grid container>
    <UseCase
      icon={
        <Image src="/home/desktop/icon-personal-finances.svg" layout="fill" />
      }
      title="Personal Finances"
      body="Anim excepteur cupidatat nostrud magna ex fugiat elit tempor incididunt quis ad est proident. Sunt nostrud cupidatat commodo magna dolor veniam consequat in ea veniam consequat laborum veniam aliqua. Veniam veniam voluptate non do dolore magna commodo ut reprehenderit aliquip ut. Sit laborum in excepteur occaecat velit ea.ku"
    />
    <UseCase
      icon={
        <Image src="/home/desktop/icon-personal-finances.svg" layout="fill" />
      }
      title="Personal Finances"
      body="Anim excepteur cupidatat nostrud magna ex fugiat elit tempor incididunt quis ad est proident. Sunt nostrud cupidatat commodo magna dolor veniam consequat in ea veniam consequat laborum veniam aliqua. Veniam veniam voluptate non do dolore magna commodo ut reprehenderit aliquip ut. Sit laborum in excepteur occaecat velit ea.ku"
    />
  </Grid>
);
