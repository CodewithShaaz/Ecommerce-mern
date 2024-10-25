import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOrders } from "../api"; // API call to get orders
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  padding: 20px 30px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 28px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

const OrderList = styled.div`
  width: 100%;
`;

const OrderCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const OrderTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const OrderDetails = styled.div`
  font-size: 16px;
  margin-top: 8px;
`;

const OrderStatus = styled.div`
  font-weight: bold;
  color: ${({ status }) => (status === "Delivered" ? "green" : status === "Shipped" ? "orange" : "red")};
`;

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setLoading(true);
    const token = localStorage.getItem("krist-app-token");
    try {
      const response = await getOrders(token); // API call to fetch orders
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Section>
          <Title>Your Orders</Title>
          <OrderList>
            {orders.length === 0 ? (
              <div>No orders found.</div>
            ) : (
              orders.map(order => (
                <OrderCard key={order.id}>
                  <OrderTitle>Order ID: {order.id}</OrderTitle>
                  <OrderDetails>Products: {order.products.map(product => product.title).join(", ")}</OrderDetails>
                  <OrderDetails>Total Amount: ${order.totalAmount}</OrderDetails>
                  <OrderStatus status={order.status}>Status: {order.status}</OrderStatus>
                </OrderCard>
              ))
            )}
          </OrderList>
        </Section>
      )}
    </Container>
  );
};

export default Orders;
