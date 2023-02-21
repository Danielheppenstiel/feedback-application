import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is item one',
            rating: 7
        },
        {
            id: 2,
            text: 'This item is item two',
            rating: 4
        },
        {
            id: 3,
            text: 'This item is item 3',
            rating: 8
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // to add feedback
    const addFeedback = (newFeeback) => {
        newFeeback.id = uuidv4();
        setFeedback([ newFeeback, ...feedback]);
    };

    // to delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Delete Permentaly')) {
            setFeedback(feedback.filter((item) => item.id !== id ));
        }
    };

    // Updata feedback item
    const updateFeedback = (id, updItem)=> {
        
        setFeedback( feedback.map((item) => item.id === id ? {...item, ...updItem} : item) );

    };

    //  set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    };

    return  <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }} >
        {children}
    </FeedbackContext.Provider>
};

export default FeedbackContext;