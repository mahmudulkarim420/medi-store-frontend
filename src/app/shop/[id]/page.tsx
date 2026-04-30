"use client";

import React from "react";
import ShopDetails from "@/pages/shop/ShopDetails";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ShopDetails />
    </div>
  );
};

export default Page;
