import  { useEffect, useState } from "react";
import { Options } from "./Options/Options";
import { Descriptions } from "./Descriptions/Descriptions";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Завантаження збереженого зворотного зв'язку з localStorage при монтуванні
  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');

    if (savedFeedback) {
      const { good, neutral, bad } = JSON.parse(savedFeedback);
      setGood(good);
      setNeutral(neutral);
      setBad(bad);
    }
  }, []);

  // Збереження зворотного зв'язку в localStorage при зміні стану
  useEffect(() => {
    const feedbackState = { good, neutral, bad };

    localStorage.setItem('feedback', JSON.stringify(feedbackState));
  }, [good, neutral, bad]);

  // Оновлюємо стан при натисканні на одну з кнопок
  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  // Підраховуємо загальну кількість відгуків
  const getTotalFeedback = () => good + neutral + bad;

  // Підраховуємо відсоток позитивних відгуків
  const getPositiveFeedbackPercentage = () => {
    const totalFeedback = getTotalFeedback();

    // Якщо загальна кількість відгуків = 0, повертаємо 0, щоб уникнути ділення на 0
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  // Метод для скидання всіх відгуків
  const resetFeedback = () => {
    const totalFeedback = getTotalFeedback();

    if (totalFeedback !== 0) {
      setGood(0);
      setNeutral(0);
      setBad(0);
    }
  };

  const renderContent = () => {
    const totalFeedback = getTotalFeedback();
    const positivePercentage = getPositiveFeedbackPercentage();

    if (totalFeedback === 0) {
      return <Notification message="No feedback yet" />;
    }
    // Передаємо також відсоток позитивних відгуків у компонент Feedback
    return (
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
      />
    );
  };

  const totalFeedback = getTotalFeedback();
  return (
    <div>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {renderContent()}
    </div>
  );
};
  



  
 


  

   
    

  


