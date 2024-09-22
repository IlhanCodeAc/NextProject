import prisma from "../lib/db";

const getByID = async ({id}:{id:string}) => {
    const product = await prisma.product.findUnique({
        where: {
            id: id,
        },
    });
    return product; 
};

export default getByID;
