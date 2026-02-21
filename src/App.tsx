import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [buttonPressed, setButtonPressed] = useState('');

  useEffect(() => {
    const handleButtonClick = (event: KeyboardEvent) => {
      setButtonPressed(event.key);
    };

    document.addEventListener('keyup', handleButtonClick);

    return () => {
      document.removeEventListener('keyup', handleButtonClick);
      setButtonPressed('');
    };
  }, []);

  return (
    <div className="App">
      {buttonPressed === '' ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">
          The last pressed key is [{buttonPressed}]
        </p>
      )}
    </div>
  );
};
