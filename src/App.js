import { Routes, Route, Link } from "react-router-dom";
import './App.css';
// import HomeTest02 from './components/HomeTest02'
// import HomeTest03 from './components/HomeTest03'
import Welcome from './page/Welcome'
import DashBoard from './page/DashBoard'
import Users from './page/Users'
import Organization from './page/Organization'
import UserCreate from "./page/UserCreate";
import UserEdit from "./page/UserEdit";
import UserView from "./page/UserView";

function App() {

  return (
    <div>
      <header className='d-flex flex-wrap justify-content-center py-2 mb-4 border-bottom'>
        <div className='container'>
          <a
            href='/'
            className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
          >
            <Link to='/'><span className='fs-4'>Green Academy</span></Link>
            
          </a>
          <Link to='/dashBoard'>DashBoard</Link> <br></br>
          <Link to='/users'>Users</Link>
          <Link to='/users'>Users</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/:id" element={<UserView />} />
          <Route path="/users/:id/edit" element={<UserEdit />} />
        </Routes>
        
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
