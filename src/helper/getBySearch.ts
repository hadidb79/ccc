import useFormQuery from "../query/useFormQuery";


export default function useGetBySearch(value:string){      
const {data} = useFormQuery().query
return data && data.find((d:any)=>{
    return d.name === value
})
}