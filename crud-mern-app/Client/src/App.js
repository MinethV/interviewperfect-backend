import { Landing } from "./pages/Landing";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
      <>
          <BrowserRouter>
              <NavBar/>
              <Routes>

                  <Route path="/" element={<Landing/>}/>
                  {/*<Route path="/Login" element={<Landing/>}/>*/}
                  {/*<Route path='' element={} ></Route>*/}
                  {/*<Route path='/create' element={} ></Route>*/}
                  {/*<Route path='/update' element={} ></Route>*/}
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;
