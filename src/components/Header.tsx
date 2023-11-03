"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="w-full h-20 bg-black text-gray-100">
      <nav className="max-w-screen-xl mx-auto h-20 flex items-center justify-between">
        <h2>Shopify</h2>
        <ul className="flex items-center gap-5">
          <li>Home</li>
          <li>Fashion</li>
          <li>Gadget</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-5">
          <div>Wishlist</div>
          <div>Cart</div>
          {session ? (
            <div className="flex items-center gap-2">
              <Image
                src={session?.user?.image as string}
                alt="profile image"
                width={500}
                height={500}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p>{session?.user?.name}</p>
            </div>
          ) : (
            <button onClick={() => signIn()}>Login</button>
          )}
          {session && <button onClick={() => signOut()}>Logout</button>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
