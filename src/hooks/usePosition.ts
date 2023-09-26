import { useEffect, useState } from 'react';

function usePosition() {
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const success = (position: any) => {
    console.log(position);
    setPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return {
    position,
  };
}

export default usePosition;
