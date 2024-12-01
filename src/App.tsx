import { useCallback, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import './App.scss';
import { Routing } from './common/routing';
import { BeersService } from './services/BeersService';
import useBeerStore from './store/useBeerStore';

function App() {
  const {beers, setBeers} = useBeerStore(useShallow(((state) => ({beers: state.beers, setBeers: state.setBeers}))));

  const getBeers = useCallback(() => {
      BeersService.getBeers()
          .then((response) => {
              setBeers(response);
          });
      }, [setBeers]);

  useEffect(() => {
      if (!beers.length) {
          getBeers();
      }
  }, [getBeers, beers.length]);  
  
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;

