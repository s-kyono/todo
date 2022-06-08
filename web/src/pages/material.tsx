import React from 'react';
import type { NextPage } from 'next';
import { Button } from "@mui/material";
import { ToDoTable } from '@/components/todos';

const Home: NextPage = () => {
  return (
    <div>
      <h1 >ボタンマテリアルUI ページ</h1>
      <Button variant="contained">ボタンだよ</Button>
      <Button variant="contained" color="primary">ボタンだよ</Button>
      <Button variant="contained" color="success">ボタンだよ</Button>
      <ToDoTable />
    </div>
  )
}

export default Home
