
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIcon from "./Components/AboutIcon";

function App() {


    return (
        <FeedbackProvider>
            <Router>
                    <Header />
                        <div className="container">
                            <Routes>
                                <Route exact path="/" element={
                                    <> 
                                        <FeedbackForm />
                                        <FeedbackStats />
                                        <FeedbackList />
                                    </>
                                }>

                                </Route>
                                <Route path='/about' element={<AboutPage />} />
                            </Routes>

                            <AboutIcon />
                        </div>
                </Router>
        </FeedbackProvider>
    )

};

export default App;