import React, { useState } from 'react';
import BirthdateInput from './components/BirthdateInput';
import AstrologyForecast from './components/AstrologyForecast';

const App: React.FC = () => {
  const [birthdate, setBirthdate] = useState<string | null>(null);

  return (
    <div className="App">
      <h1>Astrology Forecast</h1>
      <BirthdateInput onBirthdateChange={setBirthdate} />
      {birthdate && <AstrologyForecast birthdate={birthdate} />}
    </div>
  );
};

export default App;