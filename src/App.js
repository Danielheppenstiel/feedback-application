import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./Components/AboutIcon";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeeback) => {
        newFeeback.id = uuidv4();
        setFeedback([ newFeeback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Delete Permentaly')) {
            setFeedback(feedback.filter((item) => item.id !== id ));
        }
    };

    return (
       <Router>
            <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <> 
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats  feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            </>
                        }>

                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>

                    <AboutIcon />
                </div>
        </Router>
    )

};

export default App;