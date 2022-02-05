export const limitFilterCalls = (callback) => {
    const context = this;
    let timer;
    return function(...rest) {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        callback.apply(context, [...rest])
      }, 300);
    }
  }