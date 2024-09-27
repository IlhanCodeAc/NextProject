"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";
import Swal from "sweetalert2";
import { redirect } from 'next/navigation'

// export async function createProduct(data:Prisma.ProductCreateInput){
    
// }
export async function createProduct(data:FormData){
    console.log(data)
    const newProduct = {
        name: data.get("name") as string,
        image: data.get("image") as string,
        description: data.get("description") as string,
        price: Number(data.get("price")),
        sliderImageOne: data.get("sliderImageOne") as string,
        sliderImageTwo: data.get("sliderImageTwo") as string,
        sliderImageThree: data.get("sliderImageThree") as string,
        gameplayVideo: data.get("gameplayVideo") as string,
    };
    const product =await prisma.product.create({
        data:newProduct
    })
        
Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    
    revalidatePath("/products")
    return product
}
export async function deleteProduct(id:string){
    
    
    const product= await prisma.product.delete({
        where:{
            id
        }
        
    })
    console.log(product)
    
    
    revalidatePath("/products")
    redirect(`/products`)
    return product
}

export const Filter = async (sortOrder: string) => {
    const orderBy = sortOrder === 'asc' ? 'asc' : 'desc';
  
    return await prisma.product.findMany({
      orderBy: [
        {
          price: orderBy,
        },
      ],
    });
  };