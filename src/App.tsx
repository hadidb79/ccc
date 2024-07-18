import Form from "./components/Form";
import useFormQuery from "./query/useFormQuery";
import Menu from "./components/Menu";
import { Grid } from "@mui/material"; 
import { useState } from "react";
import Inputs from "./components/inputs";
function App() {
  const { data } = useFormQuery().query;
  const [sort,setSort]= useState('')
  const [isAll,setIsAll]= useState(true)
  const [showBySort,setShowBySort]= useState('2024')
  const [topicCategory,setTopicCategory]= useState('')
  const [searchValue,setSearchValue] = useState('')
  const [newValue,setNewValue]= useState({
    name:'',category:'',source:'',releasedDate:''
  })

  console.log(data);
  return (
    <div>
      <Grid container spacing={1}>
        <Grid xs={9}  item ><Form setShowBySort={setShowBySort} searchValue={searchValue} setSearchValue={setSearchValue} srt={sort} topicCategory={topicCategory} setTopicCategory={setTopicCategory} setIsAll={setIsAll} setSort={setSort} data={data} /></Grid>
        <Grid xs={3} item> <Menu showBySort={showBySort}  searchValue={searchValue} setSearchValue={setSearchValue}  srt={sort} topicCategory={topicCategory} setTopicCategory={setTopicCategory} data={data} isAll={isAll} setIsAll={setIsAll}/></Grid>
      </Grid>
      <Inputs newValue={newValue} setNewValue={setNewValue}/>
     
    </div>
  );
}

export default App;
