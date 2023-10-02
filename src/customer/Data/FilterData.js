const color = [
  "White",
  "Black",
  "Red",
  "Marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { label: "White", value: "white" },
      { label: "Black", value: "black" },
      { label: "Red", value: "red" },
      { label: "Marun", value: "marun" },
      { label: "Being", value: "being" },
      { label: "Pink", value: "pink" },
      { label: "Green", value: "green" },
      { label: "Yellow", value: "yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L" },
    ],
  },
];

const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { label: "₹159 To ₹399", value: "159-399" },
      { label: "₹399 To ₹999", value: "399-999" },
      { label: "₹999 To ₹1999", value: "999-1999" },
      { label: "₹1999 To ₹2999", value: "1999-2999" },
      { label: "₹3999 To ₹4999", value: "3999-4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { label: "10% And Above", value: "10" },
      { label: "20% And Above", value: "20" },
      { label: "30% And Above", value: "30" },
      { label: "40% And Above", value: "40" },
      { label: "50% And Above", value: "50" },
      { label: "60% And Above", value: "60" },
      { label: "70% And Above", value: "70" },
      { label: "80% And Above", value: "80" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { label: "In Stock", value: "in_stock" },
      { label: "Out Of Stock", value: "out_of_stock" },
    ],
  },
];

export { color, filters, singleFilter };
