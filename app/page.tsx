import Image from "next/image";
import Products from "./products"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Products/>
    </main>
  );
}
