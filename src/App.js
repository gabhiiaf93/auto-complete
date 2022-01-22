import { useEffect, useState } from 'react';
import './App.css';
// import { limitFilterCalls } from './helper';
import { getSearchedData } from './data-service';
import { SearchedItemList } from './components/search-item-list';
import { SearchInput } from './components/search-input';

function App() {
  const [searchParam, setSearchParam] = useState('');
  const [list, updateList] = useState([]);
  const updateSearchHandler = (e) => {
    setSearchParam(e.target.value);
  }
  // const getSearchData = useCallback(limitFilterCalls(function (searchInput, updateSearchList){
  //   console.log('CALLED',searchInput)
  //   getSearchedData(searchInput).then((resolvedList) => {
  //     updateSearchList(resolvedList);
  //   });
  // }, 1000), [setSearchParam]);  

  useEffect(() => {
    getSearchedData(searchParam).then((resolvedList) => {
      updateList(resolvedList);
    });
  }, [searchParam]);
  return (
    <div className="App">
      <SearchInput searchParam={searchParam} updateSearchHandler={updateSearchHandler}/>
      <SearchedItemList items={list}/>
    </div>
  );
}

export default App;
