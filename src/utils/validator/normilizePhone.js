const normalizePhone = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 4) {
        return onlyNums
    }
    if (onlyNums.length <= 8) {
        return `${onlyNums.slice(0, 1)}(${onlyNums.slice(1, 4)})-${onlyNums.slice(4)}`
    }
    return `${onlyNums.slice(0, 1)}(${onlyNums.slice(1, 4)})-${onlyNums.slice(4, 7)}-${onlyNums.slice(
        7,
        11
    )}`
};

export default normalizePhone