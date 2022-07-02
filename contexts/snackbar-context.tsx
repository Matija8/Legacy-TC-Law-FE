import { createContext, useContext } from 'react';

export const SnackbarContext = createContext((snackText: string) => {
  console.error('WARNING: Using default SnackbarContext!');
});
export const SnackbarCtxProvider = SnackbarContext.Provider;

export function useSnackbar() {
  const addSnack = useContext(SnackbarContext);
  return addSnack;
}
