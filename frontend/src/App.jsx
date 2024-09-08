import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import CustomersPage from "./pages/CustomersPage"
import LeadsPage from "./pages/LeadsPage"
import ReportsPage from "./pages/ReportsPage"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route index element={<HomePage/>}/>
    <Route path="/customers" element={<CustomersPage/>}/>
    <Route path="/leads" element={<LeadsPage/>}/>
    <Route path="reports" element={<ReportsPage/>}/>
    </>
  ))
  
  
    return (
      <RouterProvider router={router}/>
    )
  }

export default App
