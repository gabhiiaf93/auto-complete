import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { limitFilterCalls } from './helper';
import { getSearchedData } from './data-service';
import { SearchedItemList } from './components/search-item-list';
import { SearchInput } from './components/search-input';

function App() {
  const [list, updateList] = useState([]);

  const updateSearchHandler = (e) => {
    getSearchedData(e.target.value).then((resolvedList) => {
      updateList(resolvedList);
    });
  }

  const optimizedSearchHandler = useCallback(limitFilterCalls(updateSearchHandler), []);
  useEffect(() => {
    getSearchedData('').then((resolvedList) => {
      updateList(resolvedList);
    });
  }, []);

  return (
    <div className="App">
      <SearchInput updateSearchHandler={optimizedSearchHandler}/>
      <SearchedItemList items={list}/>
    </div>
  );
}

export default App;
