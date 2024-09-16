import React, { useState} from "react";

import { Options } from "./Options/Options";
import { Descriptions } from "./Descriptions/Descriptions";
import { Feedback } from "./Feedback/Feedback";



const App = () => {
  const [feedback, setFeedback] = useState  ({    
      good: 0,
      neutral: 0,
      bad: 0    
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,        
    }));
  };


  
    return (
      <div>
        <Descriptions/>
        <Options updateFeedback={ updateFeedback} />
        <Feedback feedback={ feedback} />
      </div>
      
      
  );
}
export default App;