const useOnce = () => {
    let hasRunOnce = false;
    return (cb) => {
        if (hasRunOnce) return;
        cb();
        hasRunOnce = true;
    };
};

export default useOnce;
