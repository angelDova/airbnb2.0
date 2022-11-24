import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    { title: "Dallas, TX", image: house1, price: "1,541" },
    { title: "Los Angeles, CA", image: house2, price: "1,274" },
    { title: "San Diego, CA", image: house3, price: "1,732" },
    { title: "Seattle, WA", image: house4, price: "1,055" },
    { title: "Denver, CO", image: house5, price: "1,161" },
    { title: "Dallas, TX", image: house1, price: "1,541" },
    { title: "Los Angeles, CA", image: house2, price: "1,274" },
    { title: "San Diego, CA", image: house3, price: "1,732" },
    { title: "Seattle, WA", image: house4, price: "1,055" },
    { title: "Denver, CO", image: house5, price: "1,161" },
    { title: "Dallas, TX", image: house1, price: "1,541" },
    { title: "Los Angeles, CA", image: house2, price: "1,275" },
    { title: "San Diego, CA", image: house3, price: "1,732" },
    { title: "Seattle, WA", image: house4, price: "1,055" },
    { title: "Denver, CO", image: house5, price: "1,161" },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lx:grid-cols-5 gap-4">
        {rentals.map((rental) => (
          <Rental
            key={rental}
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
