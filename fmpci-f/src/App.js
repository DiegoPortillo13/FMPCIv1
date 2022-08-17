
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import SideNavJs from './SideNavBar/SideNavJs';

import CompGetAll from './projects/GetAll';
import Add from './projects/Add';
import Edit from './projects/Edit'

import CompGetAllC from './quotes/GetAllC';



function App() {
  return (
    <div>

      <BrowserRouter>
        <SideNavJs />
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/proyectos" replace />}
          />
          <Route path='/proyectos' element={<CompGetAll />} />
          <Route path='/add' element={<Add />} />
          <Route path='/cotizaciones' element={<CompGetAllC />}/>
          <Route path='/edit/:numProyecto' element={<Edit />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
