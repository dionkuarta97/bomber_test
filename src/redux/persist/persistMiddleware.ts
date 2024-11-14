import AsyncStorage from '@react-native-async-storage/async-storage';
import { Middleware } from '@reduxjs/toolkit';

const PERSIST_KEYS = ['theme', 'cart'];

export const persistMiddleware: Middleware = (store) => (next) => async (action) => {
  const result = next(action);
  const state = store.getState();

  try {
    PERSIST_KEYS.forEach(async (key) => {
      if (state[key]) {
        await AsyncStorage.setItem(`@store/${key}`, JSON.stringify(state[key]));
      }
    });
  } catch (error) {
    console.error('Error saving state:', error);
  }

  return result;
};