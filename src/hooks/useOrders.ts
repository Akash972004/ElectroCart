
import { useState, useEffect } from 'react';
import { Order, CartItem } from '../types/product';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('electroOrders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('electroOrders', JSON.stringify(orders));
  }, [orders]);

  const placeOrder = (items: CartItem[]): string => {
    const orderId = `order_${Date.now()}`;
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const newOrder: Order = {
      id: orderId,
      items,
      total,
      date: new Date().toISOString(),
      status: 'processing'
    };

    setOrders(prev => [newOrder, ...prev]);
    return orderId;
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const cancelOrder = (orderId: string) => {
    updateOrderStatus(orderId, 'cancelled');
  };

  const getOrderById = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  return {
    orders,
    placeOrder,
    updateOrderStatus,
    cancelOrder,
    getOrderById
  };
};
