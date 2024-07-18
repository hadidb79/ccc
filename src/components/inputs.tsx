import { Button, FormControl, TextField, Box } from "@mui/material";
import useUpdateQuery from "../query/updateForm";
export type NewValue = {
  name?: string;
  category?: string;
  source?: string;
  releasedDate?: string;
};
interface InputsProps {
  newValue: NewValue;
  setNewValue: any;
}
const Inputs = ({ newValue, setNewValue }: InputsProps) => {
  const { mutate } = useUpdateQuery().query;

  function handleSubmit(e: any) {
    e.preventDefault();

    mutate(newValue);
  }

  function handleSetNewValue(e: any) {
    const { name, value } = e.target;
    setNewValue((prev: any) => ({ ...prev, [name]: value }));
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        value={newValue.name}
        onChange={handleSetNewValue}
        label="name"
        sx={{ width: 120 }}
        name="name"
      />
      <TextField
        value={newValue.category}
        onChange={handleSetNewValue}
        label="category"
        sx={{ width: 120 }}
        name="category"
      />
      <TextField
        value={newValue.source}
        onChange={handleSetNewValue}
        label="source"
        sx={{ width: 120 }}
        name="source"
      />
      <TextField
        value={newValue.releasedDate}
        onChange={handleSetNewValue}
        label="date"
        sx={{ width: 120 }}
        name="releasedDate"
      />
      <Button type="submit" onSubmit={handleSubmit}>
        submit
      </Button>
    </Box>
  );
};

export default Inputs;
