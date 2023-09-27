import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { whoAmI } from '../api';

const initialState = {
  me: {
    token: '',
    firstName: '',
    lastName: '',
  },
};

export const useStore = create(
  devtools(
    immer(
      combine(initialState, (set) => ({
        async whoAmI() {
          const currentUser = (await whoAmI()) ?? {};
          set((state) => {
            state.me = {
              ...state.me,
              ...currentUser,
            };
          });
        },
        async setAccessToken(token: string) {
          set((state) => {
            state.me.token = token;
          });
        },
      })),
    ),
    { enabled: !import.meta.env.PROD },
  ),
);
