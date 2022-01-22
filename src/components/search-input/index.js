import './search-input.css';

export const SearchInput = ({searchParam, updateSearchHandler}) => {
    return(
        <input className="input-class" value={searchParam} onChange={updateSearchHandler} />
    );
}