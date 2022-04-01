export const priceSort = (state, data) => {
    if (state.highToLow) {
        return data.sort((a, b) => Number(b.price) - Number(a.price));
    }
    if (state.lowToHigh) {
        return data.sort((a, b) => Number(a.price) - Number(b.price));
    }
    return data;
};

export const categoryFilter = (state, data) => {
    const categoryArr = Object.keys(state.category).filter((item) => state.category[item] === true);
    if (categoryArr.length === 0) return data;
    return data.filter((item) => categoryArr.includes(item.categoryId));
};

export const ratingFilter = (state, data) => {
    return data.filter((item) => Number(item.rating) >= Number(state.rating));
};

export const rangeFilter = (state, data) => {
    return data.filter((item) => Number(item.price) <= Number(state.priceRange));
};
