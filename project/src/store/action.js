const ActionType = {
  SELECT_CITY: 'citiesList/selectCity',
  SELECT_LIST_RENT: 'citiesList/selectListRent',
};

const ActionCreator = {
  selectCity: (activeCity) => ({
    type: ActionType.SELECT_CITY,
    activeCity,
  }),
  selectListRent: (activeCity) => ({
    type: ActionType.SELECT_LIST_RENT,
    activeCity,
  }),
};
export { ActionType, ActionCreator };
