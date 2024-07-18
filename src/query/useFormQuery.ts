import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
export default function useFormQuery () {
    const query = useQuery({
        queryKey:['article'],
        queryFn:() =>{
            try {
              return   axios.get("https://65aec62d1dfbae409a758845.mockapi.io/api/v1/articles").then(resp=>{
                return resp.data
            })
            } catch (error) {
                console.log(error);
                
            }
          
            
        }
    })
  
    return {query}
}