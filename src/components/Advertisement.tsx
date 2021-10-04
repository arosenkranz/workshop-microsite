import { useState, useEffect } from 'react';

export type AdvertisementState = {
  img: string;
  url: string;
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
    }, Math.floor(Math.random() * 10000) + 3000);

    return () => clearTimeout(timer);
  }, [ad]);

  const getAd = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_DD_ADS_URL}/ads`);
      const data = await response.json();
      const { url, path } = data[Math.floor(Math.random() * data.length)];
      const bannerAdRes = await fetch(
        `${process.env.REACT_APP_DD_ADS_URL}/banners/${path}.jpg`
      );
      if (!bannerAdRes.ok) {
        throw new Error('Error fetching banner ad');
      }
      const bannerAd = await bannerAdRes.blob();
      setAd({ img: URL.createObjectURL(bannerAd), url });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='my-3 mx-auto' style={{ minHeight: 96 }}>
      {ad && (
        <a href={`${process.env.REACT_APP_STOREDOG_URL}${ad.url}`}>
          <img src={ad.img} alt='' />
        </a>
      )}
    </div>
  );
};

export default Advertisement;
