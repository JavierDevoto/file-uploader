import { 
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SchoolsPage from "./pages/SchoolsPage"
import SubSchoolsPage from "./pages/SubSchoolsPage"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./components/Header"

export default function App() {
    return (
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Navigate replace to="schools"/>}/>
            <Route path="/schools" element={<SchoolsPage/>}/>
            <Route path="/sub-schools" element={<SubSchoolsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Router>
    )
}
