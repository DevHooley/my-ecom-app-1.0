import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { redirect } from "next/navigation";
import getCart from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar(props) {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <>
      <div className="bg-base-100">
        <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
          <div className="flex-1">
            <Link
              href="/"
              className="btn btn-ghost
           cursor-pointer text-xl normal-case"
            >
              <Image src={logo} alt="Ecommerce logo" width={40} height={100} />
              E-Commerce
            </Link>
          </div>
          <div className="flex-none gap-2">
            <form action={searchProducts}>
              <div className="form-control">
                <input
                  name="searchQuery"
                  placeholder="Search"
                  className="input input-bordered w-full min-w-[100px]"
                  type="text"
                />
              </div>
            </form>
            <ShoppingCartButton cart={cart} />
            <UserMenuButton session={session} />
          </div>
        </div>
      </div>
    </>
  );
}
