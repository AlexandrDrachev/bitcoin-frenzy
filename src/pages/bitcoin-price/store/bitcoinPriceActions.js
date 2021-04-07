export const increasePriceAction = () => {
  return {
    type: 'INCREASE_PRICE_ACTION',
  };
};

export const increasePriceSaga = (price) => {
  return {
    type: 'INCREASE_PRICE_SAGA',
    payload: price,
  };
};

export const decreasePriceAction = () => {
  return {
    type: 'DECREASE_PRICE_ACTION',
  };
};

export const decreasePriceSaga = (price) => {
  return {
    type: 'DECREASE_PRICE_SAGA',
    payload: price,
  };
};
