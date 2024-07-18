import { ArticleData } from "../types/types";
export default function letterHandler(value: string, data: ArticleData[]) {
  for (let i = 0; i < value?.length; i++) {
    console.log(value[0]);
    const idx1 = value[0];
    // for (let z = 0; z < data?.length; z++) {
    //   const x = data[z];

      const filtered = data?.filter((item: any) => {
          const everyItem = item.name;
        for (let h = 0; h < everyItem?.length; h++) {
            console.log( everyItem[h]);
            
          return everyItem[0]=== idx1;
        }
      });
    // }
    console.log(filtered);
    
    return filtered
  }
}
