import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Typography,
  List,
  Container,
  Grid,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ArticleData } from "../types/types";
import { useState } from "react";
import SortBy from "./SortBy";
import useFormQuery from "../query/useFormQuery";

import useGetSortBy from "../helper/getSortBy";
import useUpdateQuery from "../query/updateForm";

interface Props {
  data: ArticleData[];
  srt: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setIsAll: React.Dispatch<React.SetStateAction<boolean>>;
  topicCategory: string;
  setTopicCategory: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setShowBySort: React.Dispatch<React.SetStateAction<string>>;

 
}
const Form = ({
  data: articles,
  srt,
  setSort,
  setIsAll,
  topicCategory,
  setTopicCategory,
  searchValue,
  setSearchValue,
}: Props) => {
  const [value, setValue] = useState("");

  const SORT_DATE = useGetSortBy("date",'');
  const SORT_CATEGORY = useGetSortBy("category",'');
  const SORT_SOURCE = useGetSortBy("source",'');

  const {mutate} = useUpdateQuery().query
  const { data } = useFormQuery().query;
  console.log(srt);
  
  function submitData(e: any) {
    e.preventDefault();
    setSearchValue(value);

  }

  const filters =
    articles &&
    articles.map((article: ArticleData) => {
      return article.category;
    });
  const filterValues = [...new Set(filters)]; 

  const SelectInput = () => {
    return (
      <FormControl sx={{ width: 100 }}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select label="Filter">
          {filterValues?.map((value: any) => (
            <MenuItem key={value.id}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  // console.log(searchValue);

  return (
    <Stack direction="row">
    <Stack sx={{ mr: 10 ,height:"50px"}} direction="row">
      <TextField
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        label="search"
        sx={{ width: 400 }} 
      />
      <Button onClick={() => {
        setSearchValue(value)
        setTopicCategory("")
        


      }}>submit</Button>

      {/* <SelectInput /> */}
    </Stack>
         <Typography sx={{ py: 2 }}>Sort by </Typography>
         <Stack>
           <SortBy
           setSearchValue={setSearchValue}
             topicCategory={topicCategory}
             setTopicCategory={setTopicCategory}
             setIsAll={setIsAll}
             srt={srt}
             setSort={setSort}
             data={SORT_CATEGORY}
             sort="category"
           />
         </Stack>
         <Stack>
           <SortBy
           setSearchValue={setSearchValue}
             topicCategory={topicCategory}
             setTopicCategory={setTopicCategory}
             setIsAll={setIsAll}
             srt={srt}
             setSort={setSort}
             data={SORT_SOURCE}
             sort="source"
           />
         </Stack>
         <Stack>
           <SortBy
           setSearchValue={setSearchValue}
             topicCategory={topicCategory}
             setTopicCategory={setTopicCategory}
             setIsAll={setIsAll}
             srt={srt}
             setSort={setSort}
             data={SORT_DATE}
             sort="date"
           />
         </Stack>
         </Stack>
  );
};

export default Form;
