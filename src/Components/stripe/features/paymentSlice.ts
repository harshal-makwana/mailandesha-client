import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  status: 'idle' | 'succeeded' | 'failed';
}

const initialState: PaymentState = {
  status: 'idle',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentStatus(state, action: PayloadAction<'idle' | 'succeeded' | 'failed'>) {
      state.status = action.payload;
    },
  },
});

export const { setPaymentStatus } = paymentSlice.actions;
export default paymentSlice.reducer;
