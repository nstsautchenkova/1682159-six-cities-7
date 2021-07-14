import { SortType } from '../../const.js';

const getSortedItems = (items, compareFn) => {
  const sortedItems = items.slice().sort(compareFn);

  return sortedItems;
};

const getSortedOffers = (arr, sort) => {
  switch (sort) {
    case SortType.TO_HIGHT: {
      return getSortedItems(
        arr,
        (arrA, arrB) => arrA.price - arrB.price,
      );
    }
    case SortType.TO_LOW: {
      return getSortedItems(
        arr,
        (arrA, arrB) => arrB.price - arrA.price,
      );
    }
    case SortType.TOP_RATE: {
      return getSortedItems(
        arr,
        (arrA, arrB) => arrB.rating - arrA.rating,
      );
    }
  }

  return arr;
};
export { getSortedOffers, getSortedItems };
