import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from './useAppDispatch';
import { setTheme } from '../redux/slices/themeSlice';
import { darkTheme } from '../theme';
import { lightTheme } from '../theme';
import { setCart } from '../redux/slices/cartSlice';


export const useLoadPersistedState = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadState = async () => {
      try {
        const themeData = await AsyncStorage.getItem('@store/theme');
        const cartData = await AsyncStorage.getItem('@store/cart');
        console.log('themeData', themeData);
        if (themeData) {
          const { isDark } = JSON.parse(themeData);
          dispatch(setTheme(isDark ? darkTheme : lightTheme));
        }
        if (cartData) {
          console.log('cartData', cartData)
          const parsedCartData = JSON.parse(cartData)
          dispatch(setCart(parsedCartData.items));
        }
      } catch (error) {
        console.error('Error loading persisted state:', error);
      }
    };

    loadState();
  }, [dispatch]);
};