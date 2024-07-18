import {
  Collapse,
  Box,
  Button,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

interface SortProps {
  data: any;
  sort: string;
  srt: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setIsAll: React.Dispatch<React.SetStateAction<boolean>>;
  topicCategory: string;
  setTopicCategory: React.Dispatch<React.SetStateAction<string>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const SortBy = ({
  data,
  sort,
  srt,
  setSort,
  setIsAll,
  setTopicCategory,
  setSearchValue,
}: SortProps) => {
  const [toggleExpand, setToggleExpand] = useState(false);

  const handleToggleExpand = () => {
    setToggleExpand(() => !toggleExpand);
  };

  // console.log(srt);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 120,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "#eee",
      }}
      component="div"
      disablePadding
    >
      <Stack direction="row">
        <ListItemButton
          id={sort}
          onClick={() => {
            handleToggleExpand();
            setTopicCategory(sort);
          }}
          sx={{ height: 55 }}
        >
          {sort}
          {toggleExpand ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </Stack>

      <Collapse in={toggleExpand} timeout="auto" unmountOnExit>
        {data &&
          data.map((d: string, index: number) => {
            return (
              <ListItemButton
                onClick={() => {
                  setSort(d);
                  setIsAll(false);
                  setTopicCategory(sort);
                  setSearchValue("");
                }}
                key={index}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={d} />
              </ListItemButton>
            );
          })}
      </Collapse>
    </List>
  );
};

export default SortBy;
