import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import DiscountList from './components/DiscountList';

const App = () => {
  const [topBanner, setTopBanner] = useState<string>('');
  const [bottomBanner, setBottomBanner] = useState<string>('');

  useEffect(() => {
    getTopBanner();
    getBottomBanner();
  }, []);

  const getTopBanner = (): void => {
    fetch('http://localhost:5002/banners/2.jpg')
      .then((res) => res.blob())
      .then((data) => {
        setTopBanner(URL.createObjectURL(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getBottomBanner = (): void => {
    fetch('http://localhost:5002/banners/3.jpg')
      .then((res) => res.blob())
      .then((data) => {
        setBottomBanner(URL.createObjectURL(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Header banner={topBanner} />
      <main>
        <p className='w-full mx-auto mb-4 p-6 border-b-2 border-storedog-dark bg-coolGray-200 text-storedog text-center text-lg font-bold'>
          Browse the list of discounts currently offered at Storedog and save
          them for later!
        </p>
        <DiscountList />
      </main>
      <Footer banner={bottomBanner} />
    </div>
  );
};

export default App;
