import prisma from "../lib/db";

const GetByID = async ({ params }: { params: { id: string } }) => {
    const product = await prisma.product.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!product) {
        throw new Error("Product not found");
    }

    return product; 
};

export default GetByID;
