import { useState } from "react";
import MainPage from "../../pages/main-page";
import Menu from "../../pages/menu";
import { req } from "../../method/method";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from 'react-router'
import NotFaunt from "../../pages/notfaunt/notfaunt";
import Details from "../../pages/datails/datails";

export default function App() {
  const [screen2, setScreen2] = useState({ status: false });
  const [reqData, setReqData] = useState([]);

  function clickMenu(e, d) {
    setScreen2({ display: d, status: true });
    req(`https://swapi.dev/api/${d}`).then((info) => {
      setReqData(info);
    });
  }

  return (
    <>
      

    {
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage click={clickMenu}></MainPage>}></Route>
        <Route path="/planets" element={<Menu  displayName={screen2.display} data={reqData}></Menu>}></Route>
        <Route path="/people" element={<Menu  displayName={screen2.display} data={reqData}></Menu>}></Route>
        <Route path="/species" element={<Menu  displayName={screen2.display} data={reqData}></Menu>}></Route>
        <Route path="/films" element={<Menu  displayName={screen2.display} data={reqData}></Menu>}></Route>
        <Route path="/starships" element={<Menu  displayName={screen2.display} data={reqData}></Menu>}></Route>
        <Route path="/vehicles" element={<Menu  displayName={screen2.display} data={reqData}></Menu>}></Route>
        <Route path="/people/:id" element={<Details url=" https://swapi.dev/api/people/"></Details>}></Route>
        <Route path="/films/:id" element={<Details url=" https://swapi.dev/api/films/"></Details>}></Route>
        <Route path="/planets/:id" element={<Details url=" https://swapi.dev/api/planets/"></Details>}></Route>
        <Route path="/species/:id" element={<Details url=" https://swapi.dev/api/species/"></Details>}></Route>
        <Route path="/starships/:id" element={<Details url=" https://swapi.dev/api/starships/"></Details>}></Route>
        <Route path="/vehicles/:id" element={<Details url=" https://swapi.dev/api/vehicles/"></Details>}></Route>
        <Route path="*" element={<NotFaunt/>}></Route>


      </Routes>
      </BrowserRouter>

    }
      
    </>
  );
}
