import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usersignup from "./components/Usersignup";
import User from "./components/User";
import Userret from "./components/retrieve/Userret";
import Cybers from "./components/courses/Cybers";
import Cd from "./components/Cd";
import Enroll from "./components/Enroll";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path="/sign" element={<Usersignup method='post' />}/>
       <Route path="/ret" element={<Userret method='get'/>}/>
       <Route path="/user" element={<User method='post'/>}/>
       <Route path="/course/:id" element={<Cybers method='get'/>}/>
       <Route path="/cd/:id" element={<Cd method='get'/>}/>
       <Route path="/enroll/:id" element={<Enroll method='get'/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
