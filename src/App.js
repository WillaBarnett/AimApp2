import './App.css';
import AppHeader from './routes/header.js';
import Footer from './routes/footer.js';
import Steps from './steps.js';
import './fonts.css';

import StateLevel from './routes/statelevel.js';
import {Area, CandidatePick,} from './routes/areacandidate.js';
import '@progress/kendo-theme-default/dist/all.css'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
   
        
        <AppHeader />

        <Routes>
        <Route path='/' element={<Steps/>}/>
        <Route path="StateLevel" element={<StateLevel />} />
       
        <Route path="Area" element={<Area />} />

        </Routes>

       
        

        

        <Footer />
      
      
     
    </div>

  );
}


export default App;

