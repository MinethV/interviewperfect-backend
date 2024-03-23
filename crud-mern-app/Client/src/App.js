import { Landing } from "./pages/Landing";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Questions from "./pages/Questions";
import CreateQuestion from "./pages/CreateQuestion";
import UpdateQuestion from "./pages/UpdateQuestion";
import Footer from "./components/Footer";

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
                  <Route path='/update/:id' element={<UpdateQuestion/>} ></Route>
              </Routes>
              <Footer/>
          </BrowserRouter>
      </>

  );
}

export default App;
