import { instance } from "../../../axios/instance";

const fetchRelatedblogs = async (payload) => {
  const uri = payload?.tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${payload.id}`+`&_limit=4`;
  console.log(uri)
  const response = await instance.get(`blogs?${uri}`);
  return response.data;
}

export default fetchRelatedblogs;