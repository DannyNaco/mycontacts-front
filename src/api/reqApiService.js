import http from "./http";

 export async function postPublic(url, data) {
  const res = await http.post(url, data, {
    headers: { "Content-Type": "application/json" }
  });
  return res.data;
}

  export async function getPrive(url) {
    const res = await http.get(url, {
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`},
  });
  return res.data;
}

export async function postPrive(url, data){
  const res = await http.post(url, data, {
    headers: {"Content-Type":"application/json", Authorization: `Bearer ${localStorage.getItem("token")}`}
  });
  return res.data;
}

export async function patchPrive(url, data){
  const res = await http.patch(url, data, {
    headers: {"Content-Type":"application/json", Authorization: `Bearer ${localStorage.getItem("token")}`}
  });
  return res.data;
}

export async function deletePrive(url){
  const res = await http.delete(url, {
    headers: {"Content-Type":"application/json", Authorization: `Bearer ${localStorage.getItem("token")}`}
  });
  return res.data;
}

