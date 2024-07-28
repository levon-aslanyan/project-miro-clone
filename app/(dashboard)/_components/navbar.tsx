"use client";

import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="custom-navbar">Search</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
