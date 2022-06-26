// import logo from './logo.svg';
import './App.css';
import { FilterData } from './components/filterData';
import { OrderPage } from './pages/OrderPage';
import { OdersPage } from './pages/OdersPage'
import { InvoicePage } from './pages/InvoicePage';
import { PickUpPage } from './pages/PickUpPage';

import { Routes, Route, Link } from "react-router-dom";
import { LayOut } from './components/LayOut';
import { RightSideBar } from './components/RightSideBar';



const LinkList = [
  { title: 'Order', url: "/order" },
  { title: 'Invoice', url: "/invoice" },
  { title: 'Pickup', url: "/pickup" },
  { title: 'Orders', url: "/oders" },
]


function App() {
  return (
    <>
      <div className="w-full flex justify-center">
      {LinkList.map((item) => {
        return (<>
          <Link className="pl-2" to={item.url}>{item.title}</Link>
        </>)
      })}
      </div>

      <Routes>
        <Route path='/' element={<LayOut side="right"><RightSideBar/></LayOut>}>
          <Route path="/order" element={<OrderPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/pickup" element={<PickUpPage />} />
        </Route> 
          <Route path="/oders" element={< OdersPage/>} /> 
      </Routes>

    </>
  )

}

export default App;
