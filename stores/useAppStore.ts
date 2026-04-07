'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IState {
  isOfferta: boolean;
  isBtnClick: boolean;
  toggleOfferta: () => void;
  toggleBtnClick: () => void;
}

const useAppStore = create<IState>()(
  persist(
    (set) => ({
      isOfferta: false,
      isBtnClick: false,

      toggleOfferta: () => {
        set((state) => ({
          ...state,
          isOfferta: !state.isOfferta,
        }));
      },

      toggleBtnClick: () => {
        set((state) => ({
          ...state,
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
