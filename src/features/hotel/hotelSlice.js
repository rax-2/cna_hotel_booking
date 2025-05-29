
import { createSlice } from '@reduxjs/toolkit'
const hotels = [
  [
    "The Grand Palace Hotel",
    "123 Main Street, New York, NY",
    "A luxurious stay with modern amenities.",
    "New York",
    ["Free WiFi", "Pool", "Spa", "Gym", "Parking"],
    {
      rating: 4.5,
      totalReviews: 1500,
      topReview: "Amazing experience, will come again!"
    },
    "./hotel/a.jpeg",
    90000,
    [true,true,true,true,true,false,true]
  ],
  [
    "Seaside Escape Resort",
    "456 Beachside Blvd, Miami, FL",
    "Relaxing beachside resort with ocean views.",
    "Miami",
    ["Private Beach", "Free Breakfast", "Bar", "WiFi", "Airport Shuttle"],
    {
      rating: 4.7,
      totalReviews: 230,
      topReview: "Best vacation spot ever. Loved the beach!"
    },
    "./hotel/b.jpg",
    8000,
    [true,true,false,true,false,true,false]
  ],
  [
    "Mountain View Inn",
    "789 Alpine Rd, Denver, CO",
    "A cozy inn nestled in the mountains.",
    "Denver",
    ["Free Parking", "Pet Friendly", "Fireplace", "Hiking Trails"],
    {
      rating: 4.3,
      totalReviews: 98,
      topReview: "Very peaceful and scenic. Great for hiking!"
    },
    "./hotel/c.jpg",
    11900,
    [true,true,true,true,true,true,false]
  ],
  [
    "City Central Hotel",
    "101 Downtown Ave, Chicago, IL",
    "Modern hotel located in the heart of downtown.",
    "Chicago",
    ["Room Service", "WiFi", "Business Center", "24/7 Reception"],
    {
      rating: 4.0,
      totalReviews: 180,
      topReview: "Perfect location for business and shopping!"
    },
    "./hotel/d.jpeg",
    5500,
    [true,false,true,false,true,false,true]
  ],
  [
    "Lakeview Lodge",
    "202 Lakeside Drive, Minneapolis, MN",
    "Tranquil lodge with lakeside views and nature trails.",
    "Minneapolis",
    ["Lake Access", "Fishing Gear", "Free Breakfast", "Sauna"],
    {
      rating: 4.2,
      totalReviews: 75,
      topReview: "Beautiful lake view and peaceful atmosphere."
    },
    "./hotel/f.jpg",
    2900,
    [true,false,false,false,true,false,true]
  ],
  [
    "Sunset Boulevard Suites",
    "303 Sunset Blvd, Los Angeles, CA",
    "Elegant suites on iconic Sunset Boulevard.",
    "Los Angeles",
    ["Pool", "Rooftop Bar", "Concierge", "WiFi", "Pet Friendly"],
    {
      rating: 4.6,
      totalReviews: 210,
      topReview: "Stylish and central. Loved the rooftop vibes!"
    },
    "./hotel/g.jpg",
    1900,
    [false,true,true,true,true,true,true]
  ],
  [
    "Rainforest Retreat",
    "404 Jungle Path, Maui, HI",
    "Eco-friendly retreat deep in the rainforest.",
    "Maui",
    ["Nature Tours", "Organic Meals", "Spa", "Yoga Studio"],
    {
      rating: 4.8,
      totalReviews: 165,
      topReview: "A magical nature escape. Perfect for detox."
    },
    "./hotel/h.jpg",
    67900,
    [true,true,true,false,true,true,true]
  ],
  [
    "Desert Mirage Hotel",
    "505 Desert Lane, Phoenix, AZ",
    "Stylish desert oasis with top-tier service.",
    "Phoenix",
    ["Desert Tours", "Infinity Pool", "Luxury Spa", "Free Parking"],
    {
      rating: 4.4,
      totalReviews: 140,
      topReview: "Surprisingly cool and luxurious in the desert!"
    },
    "./hotel/i.jpg",
    82900,
    [true,true,true,true,true,true,false]
  ]
];

const initialState = {
  value: hotels,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer