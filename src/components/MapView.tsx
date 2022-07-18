import { useContext } from "react"
import { PLacesContext } from "../context"
import { Loading } from './';

export const MapView = () => {
    const {isLoading, userLocation} = useContext(PLacesContext)
  if(isLoading){
    return <Loading/>
  }
    return (
    <div>{userLocation?.join(',')}</div>
  )
}
