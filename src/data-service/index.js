const data = ['cat','cap','camel','apple', 'mat', 'bat', 'sat', 'tree', 'plant', 'laugh', 'happy', 'fat', 'fight'];
export const getSearchedData = (searchParam) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterData(searchParam));
        },1000);
    });
}

const filterData = (searchParam) => {
    if(searchParam) {
        return data.filter((ele) => ele.toLowerCase().includes(searchParam.toLowerCase()))
    }
    return data;
}   