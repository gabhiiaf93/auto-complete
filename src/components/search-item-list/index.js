import './search-item.css';
export const SearchedItemList = ({items}) => {
    return (<>{
        items.map((ele, index) => {
            return <div key={index} className='children'>{ele.toUpperCase()}</div>
        })
        }</>);
}