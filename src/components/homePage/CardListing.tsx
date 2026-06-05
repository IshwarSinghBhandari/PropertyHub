"use client";

import { useEffect, useState } from "react";
import { getProperties } from "@/utils/propertyAPI";
import { PropertyCard } from "../PropertyCard/PropertyCard";
import { Property } from "@/types/property";
import { PropertyCardSkeleton } from "../PropertyCard/PropertyCardSkeleton";

export default function CardListing() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await getProperties();

        setProperties(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="flex-1 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Properties  {/* {propertyType === 'all' ? 'All Properties' : propertyType === 'buy' ? 'Properties for Sale' : 'Properties for Rent'} */}
          </h2>
          <p className="text-muted-foreground mt-2">
            Showing {properties.length} {properties.length === 1 ? 'property' : 'properties'}
          </p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <PropertyCardSkeleton key={index} />
            ))}
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-semibold mb-2">
              No properties found
            </h3>

            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}

      </div>
    </section>
  );
}