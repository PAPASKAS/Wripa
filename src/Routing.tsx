import React from 'react';
import {
  NativeRouter,
  Routes,
  Route,
} from 'react-router-native';
import MainLayout from '@src/components/layouts/MainLayout';
import Book from '@src/pages/Book';
import Library from '@src/pages/Library';
import Settings from '@src/pages/Settings';
import NotFound from '@src/pages/NotFound';

export default function Routing() {
  return (
    <NativeRouter>
      <Routes>
        <Route element={ <MainLayout /> } >
          <Route index element={ <Library /> } />
          <Route path="library" element={ <Library /> } />
          <Route path="settings" element={ <Settings /> } />
          <Route path="book/:name" element={ <Book /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </NativeRouter>
  );
};
