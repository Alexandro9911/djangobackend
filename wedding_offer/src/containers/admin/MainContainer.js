import {BrowserRouter, Route, Routes} from "react-router-dom";
import OfferContainer from "../offer/OfferContainer";
import AdminContainer from "./AdminContainer";
import AnketeCreateFragment from "../../layouts/admin/AnketeCreateFragment";
import StatisticFragment from "../../layouts/admin/StatisticFragment";
import UsersFragment from "../../layouts/admin/UsersFragment";
export default function MainContainer(){
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<OfferContainer/>} />
          <Route path={'/admin'} element={<AdminContainer/>}>
            <Route path={'statistic'} element={<StatisticFragment/>}/>
            <Route path={'ankete'} element={<AnketeCreateFragment/>}/>
            <Route path={'users'} element={<UsersFragment/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}