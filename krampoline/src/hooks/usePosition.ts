import { useEffect, useState } from 'react';

function usePosition() {
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
    // .catch((err) => {});
  }, []);

  return {
    position,
  };
}

export default usePosition;
