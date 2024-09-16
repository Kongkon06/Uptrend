import { useRouter } from "next/navigation";
import DrawerNavigation from "./Sidebar";
import Link from "next/link";

export function Appbar() {
    return (
        <div className='h-28 flex justify-between font-dm-sans bg-slate-900'>
            <Link href={"/"}>
                <div className="ml-4 h-full text-5xl text-white font-semibold flex items-center">
                    Hoodie
                </div>
            </Link>
            <div className="w-2/6 flex justify-between items-center text-3xl text-white">
                <div role="button">Men</div>
                <div role="button">Women</div>
                <div role="button">Trending</div>
                <DrawerNavigation />
            </div>
        </div>
    );
}

// AppbarWithLogin.tsx
import React from 'react';          //New changes added

interface AppbarProps {
  logged: (isloggedin: boolean) => void;
}

export const AppbarWithLogin: React.FC<AppbarProps> = ({ logged }) => {
  // Component implementation
  return (
    <div>
      {/* Your Appbar JSX */}
      <button onClick={() => logged(true)}>Log In</button>
      <button onClick={() => logged(false)}>Log Out</button>
    </div>
  );
};