export const getProperties = async () => {
  const res = await fetch("/api/properties");

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  return res.json();
};