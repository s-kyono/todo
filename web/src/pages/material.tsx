import React from 'react';
import type { NextPage } from 'next';
import { Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div>
      <h1 >ボタンマテリアルUI ページ</h1>
      <Button variant="contained">ボタンだよ</Button>
      <Button variant="contained" color="primary">ボタンだよ</Button>
      <Button variant="contained" color="success">ボタンだよ</Button>
    </div>
  )
}

export default Home
