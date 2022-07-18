import {createContext} from 'react'

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
  }


export const PLacesContext = createContext<PlacesContextProps>({}as PlacesContextProps);