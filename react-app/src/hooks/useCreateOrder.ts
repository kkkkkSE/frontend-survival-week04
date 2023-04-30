import Menu from '../types/Menu';

import calcTotalPrice from '../utils/calcTotalPrice';

const url = 'http://localhost:3000/order';

const useCreateOrder = () => {
  const createOrder = async (menu : Menu[]) => {
    const totalPrice = calcTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu,
        totalPrice,
      }),
    });
    const { receipt } = await response.json();

    return receipt;
  };

  return createOrder;
};

export default useCreateOrder;
