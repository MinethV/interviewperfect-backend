import { Landing } from "./pages/Landing";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Questions from "./Questions";
import CreateQuestion from "./CreateQuestion";
import UpdateQuestion from "./UpdateQuestion";

function App() {
  return (
      <>
          <BrowserRouter>
              <NavBar/>
              <Routes>

                  <Route path="/" element={<Landing/>}/>
                  {/*<Route path="/Login" element={<Landing/>}/>*/}
                  <Route path='/read' element={<Questions/>} ></Route>
                  <Route path='/create' element={<CreateQuestion/>} ></Route>
                  <Route path='/update' element={<UpdateQuestion/>} ></Route>
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;
