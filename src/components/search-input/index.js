import './search-input.css';

export const SearchInput = ({ updateSearchHandler }) => {
    return(
        <input className="input-class" onChange={updateSearchHandler} />
    );
}