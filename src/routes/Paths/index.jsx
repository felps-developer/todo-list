import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import Home from "../../pages/sitePages/Home";
import Dashboard from "../../pages/adminPages/Dashboard";
import Login from "../../pages/adminPages/Login";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageLayout/>}>
                    <Route index element={ <Home/>}/>
                    <Route path="/dashboard" element={ <Dashboard />}/>                    
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;