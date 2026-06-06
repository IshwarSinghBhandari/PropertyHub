"use client";

import { useEffect, useState } from "react";
import Banner from "@/components/homePage/Banner";
import CardListing from "@/components/homePage/CardListing";
import { getProperties } from "@/utils/propertyAPI";
import { Filters, Property } from "@/types/property";
import { BHK_OPTIONS, TYPE_OPTIONS } from "@/constants/filter";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<Filters>({
    bhk: BHK_OPTIONS[0],
    location: "",
    type: TYPE_OPTIONS[0],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await getProperties(filters);

        setProperties(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main>
        <Banner filters={filters} setFilters={setFilters} />
        <CardListing properties={properties} loading={loading} type={filters.type} />
      </main>
    </div>
  );
}