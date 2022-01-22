export const limitFilterCalls = (callback, delay=1000) => {
    let timer = null;
    return function() {
        const context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(context, [...args]);
        }, delay);
        
    }
}