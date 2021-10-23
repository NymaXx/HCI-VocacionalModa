import { useEffect } from "react";
import "./Actividad.scss";
import ActividadContext, { ActividadContextProvider } from "./config/ActividadContext";
import MEDIA from "./config/Routes";
import Game from "./src/Game";

const Actividad = () => {
    return <ActividadContextProvider>
        <ActividadLoad />
    </ActividadContextProvider>
}

const ActividadLoad = () => {
    const { useActividad } = ActividadContext();
    const [actividad] = useActividad();

    useEffect(() => {

      //aqui va el codigo del test vocacional


      actividad.addPROCESSING(new Game(actividad));


    }, [])


    return <></>


}

export default Actividad;


