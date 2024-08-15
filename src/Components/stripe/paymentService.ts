export const createCheckoutSession = async (amount: number) => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }
  
    const data = await response.json();
    return data.id;
  };
  