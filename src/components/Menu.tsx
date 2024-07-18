import { Box, Stack, Typography } from "@mui/material";
import useFormQuery from "../query/useFormQuery";
import { ArticleData } from "../types/types";
import useFilter from "../helper/filter";
import useGetBySearch from "../helper/getBySearch";
import letterHandler from "../helper/letterHander";

interface Props {
  data: ArticleData[];
  srt: string;
  isAll: boolean;
  setIsAll: React.Dispatch<React.SetStateAction<boolean>>;
  topicCategory: string;
  setTopicCategory: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  showBySort: string;
}
const Menu = ({
  data: articles,
  srt,
  isAll,
  topicCategory,
  searchValue,
  showBySort,
}: Props) => {
  const DATA = useFilter(srt, topicCategory, isAll);
  const all = useFilter(null, null);
  const searchData = useGetBySearch(searchValue);
  const { data } = useFormQuery().query;

  const letterData = letterHandler(searchData?.name, articles);
  console.log(data);
  const f =
    data &&
    data.filter((article: ArticleData) => {
      if (topicCategory === "category") {
        return article.category === srt;
      }
      if (topicCategory === "date") {
        return article.releasedDate === srt;
      } if(topicCategory === "source") {
        return article.source === srt;
      }
      else{return null}
    });
  // console.log(f);

  return (
    <Box component="div" sx={{ width: 500 }}>

      {f &&
        f.map((article: ArticleData) => {
          return (
            <Stack key={article.id}>
              <Typography>{article.name}</Typography>
            </Stack>
          );
        })}

      <Typography>{searchData?.name}</Typography>
      {searchData && (
        <img
          style={{ width: "150px", height: "100px" }}
          src={searchData?.pic}
        />
      )}

    </Box>
  );
};

export default Menu;
