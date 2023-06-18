import React, { useState } from 'react';

const WordCounter = () => {
  const [inputValue, setInputValue] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setWordCount(value.trim().split(/\s+/).length);
  };
  
  const clear=(e)=>{
    setInputValue("");
    setWordCount(0);
  }

  const styles = {
    wordCounter: {
      width: '100%',
    },
    textarea: {
      width: '100%',
      height: '150px',
      resize: 'vertical',
    },
    '@media (min-width: 768px)': {
      textarea: {
        height: '200px',
      },
    },
  };

  return (
    <div style={styles.wordCounter}>
        <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Word Count: {wordCount}</p>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default WordCounter;
