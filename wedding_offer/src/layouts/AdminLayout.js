import '../styles/admin/adminLayout.sass'
import MainNavbar from "../components/admin/navs/MainNavbar";
import { Outlet } from "react-router-dom";
import PageNavBar from "../components/admin/navs/PageNavBar";
import ModalsProvider from "../modals/admin/ModalsProvider";
import {useEffect} from "react";
import {fillListQuestionsAction} from "../store/admin/question/actions";
import {useDispatch} from "react-redux";

export default function AdminLayout(){
  
  return (
    <div>
      <ModalsProvider>
        <MainNavbar/>
        <div className="admin-layout">
          <PageNavBar/>
          <Outlet/>
        </div>
      </ModalsProvider>
    </div>
  )
}