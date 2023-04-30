import {create} from 'zustand';
import {createFishSlice} from './testSlice';

export const useStore = create((...a) => ({
  ...createFishSlice(...a),
}));
