import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";


export default function AdminLayout() {
  return (
    <div>
   <AdminHeader/>
  <Sidebar/>
    <div><Outlet/></div>
   
      
    </div>
  )
}
