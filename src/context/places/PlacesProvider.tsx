import { ReactNode, useEffect, useReducer } from "react";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";
import { PLacesContext } from './PlacesContext';
export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INTIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

interface Props {
  children: ReactNode;
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INTIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    );
  }, []);

  return (
    <PLacesContext.Provider value={{ ...state }}>
      {children}
    </PLacesContext.Provider>
  );
};
