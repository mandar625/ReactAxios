// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Crud/Create';
import Read from './Crud/Read';
import Update from './Crud/Update';
// import Getaxios from './components/Getaxios';
// import Postaxios from './components/Postaxios';
// import Getdata from './Getdata';
// import Hooks from './Hooks';

function App() {
  return (
    <>
    
     {/* <Getdata></Getdata> */}
     {/* <Hooks></Hooks> */}
     {/* <Getaxios></Getaxios> */}
     {/* <Postaxios></Postaxios> */}

     <div className='container'>

      

       <Routes>
         <Route path='/' element={<Read></Read>} ></Route>
         <Route path='/create' element={<Create></Create>} ></Route>
         <Route path='/update' element={<Update></Update>} ></Route>
       </Routes>

     </div>

    
    

    </>
  );
}

export default App;
