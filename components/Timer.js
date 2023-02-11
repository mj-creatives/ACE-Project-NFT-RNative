import React, { useState } from "react";
import Countdown from "react-countdown";
import { Text } from "react-native";

const Completionist = () => <Text>You are good to go!</Text>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Text>
        {hours}h {minutes}m {seconds}s
      </Text>
    );
  }
};

const Timer = ({ length }) => {
  const [date, setDate] = useState(Date.now() + length);
  const handleResetClick = () => {
    setDate(Date.now() + length);
  };
  return (
    <Text>
      <Countdown 
      key={date}
      date={date}
      onComplete={handleResetClick}
      autoStart={true}
      renderer={renderer}
      />
    </Text>
  )
}

export default Timer