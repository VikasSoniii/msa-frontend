import api from "./client";

export const getOrders = async () => {
  console.log("-----------Request to fetch all orders details initiated-----------");
  const { data } = await api.get("/orders");
  return data;
};

export const getOrderById = async (id) => {
  console.log("Request to fetch the order detail for Id:", id);
  const { data } = await api.get(`/orders/${id}`);
  return data;
};

export const createOrder = async (payload) => {
  console.log("-----------Create order request initiated-----------");
  const { data } = await api.post("/orders", payload);
  return data;
};