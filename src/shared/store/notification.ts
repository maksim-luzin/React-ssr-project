import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

import { NotificationType } from '@/src/constants/enums';
import { INotification } from '@/src/interfaces';

interface INotifications {
  notifications: INotification[];
}

const defaultNotification: INotification = {
  id: uuid.v4() as string,
  type: NotificationType.Success,
  message: 'Success!'
};

const initialState: INotifications = {
  notifications: []
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state,
      {
        payload = defaultNotification
      }: PayloadAction<Omit<INotification, 'id'>>
    ) => {
      state.notifications.push({
        ...payload,
        id: uuid.v4() as string
      });
    },
    deleteNotification: (state, { payload = '' }: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        ({ id }) => id !== payload
      );
    }
  }
});

export const { addNotification, deleteNotification } =
  notificationsSlice.actions;
