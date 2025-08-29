import { useEffect, useState } from "react";
import { getOrders } from "../api/orders";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getOrders();
        setOrders(Array.isArray(data) ? data : []);
      } catch (e) {
        setErr(e?.response?.data || e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (err) return <p style={{ color: "crimson" }}>Error: {String(err)}</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map(o => (
            <li key={o.id}>
              <b>{o.product}</b> × {o.quantity} — {o.customerName} — {o.orderDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}