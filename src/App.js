import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Feedbacklist from "./Components/Feedbacklist"
import Header from "./Components/Header"
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForms from './Components/FeedbackForms'
import AboutPage from './Pages/AboutPage'
import { FeedbackProvider } from './Context/FeedbackContext'
import AboutIconLink from './Components/AboutIconLink'

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                            <FeedbackForms />
                            <FeedbackStats />
                            <Feedbacklist />
                            </>
                            }>    
                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}
export default App