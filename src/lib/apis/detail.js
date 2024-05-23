import axios from "axios";

export async function getBoardDetail({params}) {
  const resp = await axios.get(`/api/board/${params}`);
  console.log(resp.data);
  return resp.data;
}
