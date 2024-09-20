import prisma from '@/app/lib/db';
import React from 'react';
import style from './style.module.scss'
import { Container } from '@mui/material';

export async function Cards(): Promise<React.JSX.Element> {
    const products = await prisma.product.findMany();
    
    return (
        <>
            <Container>

            {products.map((product) => (
                <div className={style.ProductContainer} key={product.id}>
                    <div className={style.ProductCard}>
                        <img className={style.ProductImage} src={product.image} alt="" />
                        <div className={style.ProductCardFooter}>
                            <h2 className={style.ProductName}>{product.name}</h2>
                            <div className={style.ProductButtons}>
                                <button className={style.SendToCart}>Add To Cart</button>
                            </div>
                        </div>
                        <div className={style.ProductCard}>
                        <img className={style.ProductImage} src={product.image} alt="" />
                        <div className={style.ProductCardFooter}>
                            <h2 className={style.ProductName}>{product.name}</h2>
                            <div className={style.ProductButtons}>
                                <button className={style.SendToCart}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.ProductCard}>
                        <img className={style.ProductImage} src={product.image} alt="" />
                        <div className={style.ProductCardFooter}>
                            <h2 className={style.ProductName}>{product.name}</h2>
                            <div className={style.ProductButtons}>
                                <button className={style.SendToCart}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
            </Container>
        </>
    );
}
