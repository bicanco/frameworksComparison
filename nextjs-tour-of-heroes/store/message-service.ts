import { useAppSelector } from '@hooks';
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

interface State {
  messages: string[];
}

export const messageServiceSlice = createSlice<State, SliceCaseReducers<State>>({
  name: 'messageService',
  initialState: {
    messages: []
  },
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload);
    },
    clear: (state) => {
      state.messages = [];
    },
  },
});

export const MessageServiceActions = {
  ...messageServiceSlice.actions,
}

export const useMessageService =
  () => useAppSelector(state => state.messageService);

export default messageServiceSlice.reducer
