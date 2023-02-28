import { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notific } from './Notific/Notific';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = () => {
    // console.log(good + neutral + bad);
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = totalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={options} updateFeedback={updateFeedback} />
      </Section>
      {totalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      ) : (
        <Notific />
      )}
    </>
  );
};
