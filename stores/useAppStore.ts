'use client';
import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

interface IState {
  isOfferta: boolean;
  isTimer: boolean;
  toggleOfferta: () => void;
  toggleIsTimer: () => void;
}

const useAppStore = create<IState>()(
  // persist(
  (set) => ({
    isOfferta: false,
    isTimer: false,

    toggleOfferta: () => {
      set((state) => ({
        ...state,
        isOfferta: !state.isOfferta,
      }));
    },

    toggleIsTimer: () => {
      set((state) => ({
        ...state,
        isTimer: !state.isTimer,
      }));
    },
  }),
  //   {
  //     name: 'shopping',
  //     storage:
  //       typeof window !== 'undefined'
  //         ? {
  //             getItem: (name) => {
  //               const str = localStorage.getItem(name);
  //               return str ? JSON.parse(str) : null;
  //             },
  //             setItem: (name, value) => {
  //               localStorage.setItem(name, JSON.stringify(value));
  //             },
  //             removeItem: (name) => localStorage.removeItem(name),
  //           }
  //         : undefined,
  //   },
  // ),
);

export default useAppStore;
