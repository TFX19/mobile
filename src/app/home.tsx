import {Alert, Text, View } from "react-native"
import {api} from "@/src/services/api"
import { useEffect, useState } from "react";

import { Places } from "../components/places";
import { Categories, CategoriesProps } from "../components/categories";
import { PlaceProps } from "../components/place";


type MarketsProps = PlaceProps

export default function Home(){

    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState ("")
    const [markets, setMarkets]= useState<MarketsProps[]>([])

    async function fetchCategories(){
        try {
            const { data } = await api.get("/categories")
            console.log("Categorias:", data);
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("categorias", "não foi possivel carregar as categorias")
        }
    }

    async function fetchMarkets() {
        try {
          if (!category) {
            return
          }

          const { data } = await api.get("/markets/category/" + category)
          setMarkets(data)
        } catch (error) {
          console.log(error)
          Alert.alert("Locais", "Não foi possível carregar os locais.")
        }
      }

    useEffect(() =>{
        fetchCategories()
    }, [])

    useEffect(() =>{
        fetchMarkets()
    }, [category])

    return(
    
        <View style={{ flex: 1 , backgroundColor:"#CECECE" }}>
            <Categories 
            data= {categories} 
            onSelect={setCategory} 
            selected={category} 
            />

            <Places data={markets} />
        </View>
      
    )
}