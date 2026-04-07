'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IState {
  isOfferta: boolean;
  isBtnClick: boolean;
}

const useAppStore = create(
  persist(
    (set, _get) => ({
      isOfferta: false,
      isBtnClick: false,

      toggleOfferta: () => {
        set((state: IState) => ({
          isOfferta: !state.isOfferta,
          isBtnClick: state.isBtnClick,
        }));
      },

      toggleBtnClick: () => {
        set((state: IState) => ({
          isOfferta: state.isOfferta,
          isBtnClick: !state.isBtnClick,
        }));
      },
    }),
    {
      name: 'shopping',
      storage:
        typeof window !== 'undefined'
          ? {
              getItem: (name) => {
                const str = localStorage.getItem(name);
                return str ? JSON.parse(str) : null;
              },
              setItem: (name, value) => {
                localStorage.setItem(name, JSON.stringify(value));
              },
              removeItem: (name) => localStorage.removeItem(name),
            }
          : undefined,
    },
  ),
);

export default useAppStore;
