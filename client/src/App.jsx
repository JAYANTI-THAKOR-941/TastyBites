import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import ProductManagement from './admin/ProductManagement';
import AddProduct from './admin/AddProduct';
import Update from './admin/Update';

const App = ()=>{
  return(
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<ProductManagement/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
     </Routes>
    </>
    
  )
}
export default App;