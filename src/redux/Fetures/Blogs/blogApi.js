import { instance } from "../../../axios/instance";

const fetchblogs = async () => {
  const response = await instance.get("/blogs");
  return response.data;
}

export default fetchblogs;