import {Routes,Route} from 'react-router-dom';
// import Register from './pages/Register';
import Login from './pages/Login';
import AddProduct from './admin/AddProduct';
import Update from './admin/Update';
import ProductManagement from './admin/ProductManagement';

const App = ()=>{
  return(
    <>
     <Routes>
        {/* <Route path='/' element={<Register/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/' element={<ProductManagement/>}/>
     </Routes>
    </>
    
  )
}
export default App;