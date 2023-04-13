import { getEyesList } from '@core';
import { useEffect, useState } from 'react';

const useSearchHook = () => {
  const [eyes, setEyes] = useState();
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const data = await getEyesList();
    setEyes(data);
  };

  return { eyes };
};

export default useSearchHook;
