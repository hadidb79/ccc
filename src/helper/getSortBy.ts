import useFormQuery from "../query/useFormQuery";
import { ArticleData } from "../types/types";

export default function useGetSortBy(sort:string,value:string){
    const {data} = useFormQuery().query
    if(sort === 'category'){
        const C = data && data.map((d : ArticleData)=>{
            return d.category
        })
        return [...new Set(C)]
    } 
    if(sort === 'source'){
        const C = data && data.map((d : ArticleData)=>{
            return d.source
        })
        return [...new Set(C)]
    }
    if(sort === 'date'){
        const C = data && data.map((d : ArticleData)=>{
            return d.releasedDate
        })
        return [...new Set(C)]
    }
   
}