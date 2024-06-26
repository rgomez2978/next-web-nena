import { useEffect } from 'react';
import useStore from '@/stores/index';

function useStoreSync(initialState) {
  const set = useStore((state) => state.set);

  useEffect(() => {
    set(initialState);
  }, [initialState, set]);

}

export default useStoreSync;