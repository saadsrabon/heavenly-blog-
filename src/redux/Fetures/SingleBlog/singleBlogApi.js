import { instance } from "../../../axios/instance";

const fetchblog = async (id) => {
  const response = await instance.get(`/blogs/${id}`);
  return response.data;
}

export const saveblogItem = async (id) => {
    console.log(id)
  const response = await fetch(`http://localhost:9000/blogs/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        isSaved:true
    })
  })
 
  return response.json();
}
export default fetchblog;