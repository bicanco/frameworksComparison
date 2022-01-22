import { configureStore } from '@reduxjs/toolkit';

import MessageService from './message-service';

export const store = configureStore({
  reducer: {
    messageService: MessageService,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
