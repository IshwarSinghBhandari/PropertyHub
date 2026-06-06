import { BHK_OPTIONS } from "@/constants/filter";
import { Filters } from "@/types/property";

export const getProperties = async (filters?: Filters) => {
  const query = new URLSearchParams();

  if (filters?.bhk) query.append("bhk", filters.bhk === BHK_OPTIONS[0] ? filters.bhk : filters.bhk[0]);
  if (filters?.location) query.append("location", filters.location);
  if (filters?.type) query.append("type", filters.type);

  const url = query.toString()
    ? `/api/properties?${query.toString()}`
    : `/api/properties`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  return res.json();
};

export const getPropertyById = async (id: string) => {
  const query = new URLSearchParams();
    query.append("id", id);
  const url = `/api/properties?${query.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  return res.json();
};