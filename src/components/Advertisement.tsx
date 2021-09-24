import { useState, useEffect } from 'react';

export type AdvertisementState = {
  path: string;
  url: string;
  name: string;
  id: string;
  weight: number;
};

const Advertisement = () => {
  const [ad, setAd] = useState<AdvertisementState | null>(null);

  useEffect(() => {
    if (ad === null) {
      getAd();
      return;
    }

    const timer = setTimeout(() => {
      getAd();
    }, Math.floor(Math.random() * 10000) + 5000);

    return () => clearTimeout(timer);
  }, [ad]);

  const getAd = async () => {
    const response = await fetch(`${process.env.REACT_APP_DD_ADS_URL}/ads`);
    const data = await response.json();
    const selectedAd = data[Math.floor(Math.random() * data.length)];
    setAd(selectedAd);
  };

  return (
    <div className='my-3 mx-auto' style={{ minHeight: 96 }}>
      {ad && (
        <a href={`${process.env.REACT_APP_STOREDOG_URL}${ad.url}`}>
          <img
            src={`${process.env.REACT_APP_DD_ADS_URL}/banners/${ad.path}`}
            alt={ad.name}
          />
        </a>
      )}
    </div>
  );
};

export default Advertisement;
