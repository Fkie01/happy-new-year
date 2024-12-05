import React from "react";
import Confetti from "react-confetti";

const HappyNewYearApp = () => {
  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f8ff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: "3em",
      color: "#ff4500",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.8em",
      color: "#4caf50",
      maxWidth: "600px",
      lineHeight: "1.6",
      padding: "0 20px",
    },
    footer: {
      marginTop: "20px",
      fontSize: "1em",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      {/* Confetti */}
      <Confetti />
      <h1 style={styles.header}>🎉 Happy New Year! 🎉</h1>
      <p style={styles.message}>
        Dear [Friend's Name],
        <br />
        Wishing you a year filled with happiness, good health, and endless
        opportunities. May all your dreams come true, and may this new year
        bring you closer to achieving your goals. Cheers to the wonderful times
        ahead! 🥂
      </p>
      <footer style={styles.footer}>With love, [Your Name]</footer>
    </div>
  );
};

export default HappyNewYearApp;
