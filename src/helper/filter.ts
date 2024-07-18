import useFormQuery from "../query/useFormQuery";
import { ArticleData } from "../types/types";

export default function useFilter(
  filterData: string | null,
  sort: keyof ArticleData | null | string,
  isAll: boolean = true 
) {
  const { data } = useFormQuery().query;
  if (!isAll && sort === "category") {
    return data?.filter((d: ArticleData) => {
      return d.category === filterData;
    });
  }
  if (!isAll && sort === "date") {
    return data?.filter((d: ArticleData) => {
      return d.releasedDate === filterData;
    });
  }
  if (!isAll && sort === "source") {
    return data?.filter((d: ArticleData) => {
      return d.source === filterData;
    });
  }
  if (isAll) return data;
}
