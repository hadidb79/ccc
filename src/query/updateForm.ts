import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { NewValue } from "../components/inputs";

export default function useUpdateQuery() {
  const queryClient = useQueryClient();
  const query = useMutation({
    mutationFn: (newData:NewValue) => {
      return axios
        .post("https://65aec62d1dfbae409a758845.mockapi.io/api/v1/articles", newData)
        .then((res) => {
          queryClient.invalidateQueries({ queryKey: ["article"] });
          return res.data;
        });
    },
  });
  return { query };
}
