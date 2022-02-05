import './search-item.css';
export const SearchedItemList = ({items}) => {
    return (<div className='item-list'>
        {
        items.map((ele, index) => {
            return <div key={index} className='children'>{ele.toUpperCase()}</div>
        })
        }
        </div>);
}