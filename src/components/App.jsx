import  { Component, } from "react";
import { Options } from "./Options/Options";
import { Descriptions } from "./Descriptions/Descriptions";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
// Викликається при першому завантаженні компоненту
  componentDidMount() {
    const savedFeedback = localStorage.getItem('feedback');
    
    if (savedFeedback) {
      // Якщо дані є, парсимо їх і оновлюємо стан
      this.setState(JSON.parse(savedFeedback));
    }
  }
// Викликається після кожного оновлення компоненту
  componentDidUpdate(prevProps, prevState) {
    // Перевіряємо, чи змінився стан, і якщо так, зберігаємо новий стан у localStorage
    if (prevState !== this.stste) {
      localStorage.setItem('feedback', JSON.stringify(this.state));
    }
  }

// Оновлюємо стан при натисканні на одну з кнопок
  updateFeedback = (feedbackType) => {
    this.setState((prevState) => ({      
      [feedbackType]: prevState[feedbackType] + 1,        
    }));
  };

  // Підраховуємо загальну кількість відгуків
  getTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // Підраховуємо відсоток позитивних відгуків
  getPositiveFeedbackPercentage = () => {
    const totalFeedback = this.getTotalFeedback();
    const { good } = this.state;
// Якщо загальна кількість відгуків = 0, повертаємо 0, щоб уникнути ділення на 0
    return totalFeedback ===0 ? 0 : Math.round((good / totalFeedback) * 100);
  }
// Метод для скидання всіх відгуків
  resetFeedback = () => {
    const totalFeedback = this.getTotalFeedback();

    if (totalFeedback !== 0) {
      this.setState({
        good: 0,
        neutral: 0,
        bad: 0
      });
    }       
  };

  renderContent = () => {
    const totalFeedback = this.getTotalFeedback();
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.getPositiveFeedbackPercentage();

    if (totalFeedback === 0) {
      return <Notification message="No feedback yet" />;
    }
    // Передаємо також відсоток позитивних відгуків у компонент Feedback
    return <Feedback
      good={good}
      neutral={neutral}
      bad={bad}
      totalFeedback={totalFeedback}
      positivePercentage={positivePercentage}
    />;
  };

  render() {
    const totalFeedback = this.getTotalFeedback();
return (
      <div>
        <Descriptions/>
    <Options
      updateFeedback={this.updateFeedback}
      onReset={this.resetFeedback}    
      totalFeedback={totalFeedback}
      
    />
        {this.renderContent()} 
      </div>
      
      
  );
}
}   


