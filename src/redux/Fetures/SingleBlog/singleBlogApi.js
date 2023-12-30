import { instance } from "../../../axios/instance";

const fetchblog = async (id) => {
  const response = await instance.get(`/blogs/${id}`);
  return response.data;
}

export default fetchblog;