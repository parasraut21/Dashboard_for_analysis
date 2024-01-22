import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';
import Hero from './components/Home';

function App() {
  const [mainData, setMainData] = useState([]);

  const getDataFromDB = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/data/all");
      const result = await response.json();
      setMainData(result.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getDataFromDB();
  }, []);

  useEffect(() => {
    console.log(mainData.length);
  }, [mainData]);

  return (
    <div className="relative h-screen">

      <div className="relative z-10">
        <Header />
        <Tabsrow data={mainData} setMainData={setMainData} />
      </div>
      <Hero />
    </div>
  );
}

export default App;
