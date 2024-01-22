import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import CardsForData from './CardsForData';
import AccordionForCharts from './AccordionForCharts';
import Filters from './Filters';

const Tabsrow = ({ data, setMainData }) => {
  const [limit, setLimit] = useState(5);
  const limitedData = data.slice(0, limit);
  const [search, setSearch] = useState("");

  const handleSearchResult = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/data/any/${search}`);
      const result = await response.json();
      setMainData(result.data);
      setSearch("");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className='tabsClass  p-8'>
      <Tabs
        defaultActiveKey="data"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="data" title="Data">
          <form className="flex items-center space-x-4" onSubmit={handleSearchResult}>
            <input
              className="border rounded py-2 px-4 md:px-6 lg:px-8 xl:px-10 focus:outline-none focus:border-blue-500 bg-gray-700 text-white w-full"
              type="search"
              placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Search
            </button>
          </form>
          <Filters setMainData={setMainData} />

          {limitedData && limitedData.length === 0 ? (
            <div className="m-4 text-white">No data found, or please wait for a while.</div>
          ) : limitedData && limitedData.length > 0 ? (
            <CardGroup>
              {limitedData.map((e, i) => (
                <CardsForData item={e} key={i} />
              ))}
            </CardGroup>
          ) : (
            <div className="m-4 text-white">Loading...</div>
          )}
          <Button
            variant="primary"
            onClick={() => setLimit(prev => prev + 5)}
            className="mt-4"
          >
            Show More
          </Button>
        </Tab>
        <Tab eventKey="chart" title="Interactive Insights/Dashboard">
          <form className="flex items-center space-x-4" onSubmit={handleSearchResult}>
            <input
              className="border rounded py-2 px-4 md:px-6 lg:px-8 xl:px-10 focus:outline-none focus:border-blue-500 bg-gray-700 text-white w-full"
              type="search"
              placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Search
            </button>
          </form>
          <Filters setMainData={setMainData} />
          <AccordionForCharts data={data} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Tabsrow;
