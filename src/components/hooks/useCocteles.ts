import {useEffect,useState} from 'react';
import type {Coctel} from "../types/coctel";

type CharacterAPI ={
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

const useCocteles = () => {
  const [cocteles,setCocteles] = useState<Coctel[]>([]);

  useEffect(() => {
    const traerCocteles = async () => {
        try{
            // fetch -> función que le dice al navegador que traiga la API
            const respuesta = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
            const datos = await respuesta.json(); //abre y los convierte a java script

            //variable para guardar los datos ->  const listadoReal: Coctel[]
            //mapear -> devuelve a la API y recorrer cada elemento
            //(p: CharacterAPI) -> es cada bebida con esa forma y en lo de id,str es que toma el valor de la API
            const listadoReal: Coctel[] = datos.drinks.map((p:CharacterAPI) => ({
                idDrink: p.idDrink,
                strDtrink: p.strDrink,
                strDrinkThumb: p.strDrinkThumb,
            }));
            setCocteles(listadoReal);
        }
        catch(error){
            console.error("Error al traer los cocteles", error);
        }
    };
    traerCocteles();
},[]);

    return{
        cocteles
    }
}

export default useCocteles