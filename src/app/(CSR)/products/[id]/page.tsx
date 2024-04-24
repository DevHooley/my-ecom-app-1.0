import PriceTag from "../../../components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image"; // Import Image component from Next.js
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";
import Container from "@/app/components/container";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " | E-commerce",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Container className="">
        <Image
          src={product.imageUrl} // Corrected typo: src instead of scr
          alt={product.name}
          width={500}
          height={500}
          className="priority rounded-lg"
          priority
          style={{ width: "100%", height: "100%" }}
        />
        <div className="">
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <PriceTag price={product.price} className="mt-4" />
          <p className="py-6">{product.description}</p>
          <AddToCartButton
            productId={product.id}
            incrementProductQuantity={incrementProductQuantity}
          />
        </div>
      </Container>
    </div>
  );
}

// import PriceTag from '../../../components/PriceTag';
// import { prisma } from '@/lib/db/prisma';
// import { Metadata } from 'next';
// import Image from 'next/image'; // Import Image component from Next.js
// import { notFound } from 'next/navigation';
// import { cache } from 'react'

// interface ProductPageProps {
//   params: {
//     id: string;
//   }
// }

// const getProduct = cache (async (id: string) => {
//   const product = await prisma.product.findUnique({where: {id}})
//  if (!product) notFound();
//  return product;
// })

// export async function generateMetadata({
//   params: { id },
// }: ProductPageProps): Promise<Metadata>  {
//   const product = await getProduct(id);
// }

// export default async function ProductPage(
//   {params: { id }} : ProductPageProps
// ) {
//   const product = await getProduct(id);
//   return {
//     title: product.name + ' | E-commerce',
//     description: product.description ,
//     openGraph: {
//       images: [{ url: product.imageUrl }],
//     },
//   };
// }

//   return (
//     <div className="flex flex-col gap-4 lg:items-center lg:flex-row">
//       <Image
//         src={product.imageUrl} // Corrected typo: src instead of scr
//         alt={product.name}
//         width={500}
//         height={500}
//         className="rounded-lg
//         priority"
//       />
//       <div className=''>
//         <h1 className='text-5xl font-bold'>{product.name}</h1>
//         <PriceTag price={product.price} className='mt-4' />
//         <p className='py-6'>{product.description}</p>
//       </div>
//     </div>
//   );
// }
