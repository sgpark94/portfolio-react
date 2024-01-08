import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeView from './views/HomeView'

const App = () => {
  return (
    <BrowserRouter> {/* 라우팅을 적용하기 위한 컴포넌트 */}
      <Routes> {/* 라우트들을 정의하는 컨테이너*/}
        <Route path="/" element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
