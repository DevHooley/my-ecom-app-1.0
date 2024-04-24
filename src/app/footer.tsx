import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-slate-600 p-4 text-center text-white">
        <p>My E-Commerce Application</p>
        <div>
          <div className="flex-1">
            <Link
              href="/add-product"
              className="btn  cursor-pointer
            text-lg normal-case"
            >
              Add-Product
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
