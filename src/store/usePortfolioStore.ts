import { create } from 'zustand';
import type { PortfolioState } from '../types';

export const usePortfolioStore = create<PortfolioState>((set) => ({
  isDarkMode: true, 
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));