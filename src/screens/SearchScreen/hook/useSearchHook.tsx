import { getEyesList } from '@core';
import { useEffect, useState } from 'react';

type eyeDataProps = {
  id: number;
  question: string;
  type: string;
  answers: string[];
};

const useSearchHook = () => {
  const [eyes, setEyes] = useState<eyeDataProps[]>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const data = await getEyesList();
    setEyes(data);
  };

  return { eyes, setEyes };
};

export default useSearchHook;
