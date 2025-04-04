import React from "react";
import GetByID from "@/app/actions/products";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Container } from "@mui/material";
import style from "./style.module.scss";
import Link from "next/link";
import { deleteProduct } from "@/app/(actions)/product";
import Delete from "@/app/_components/Delete/Delete";
import DeleteButton from "@/app/_components/Delete/Delete";

const Page = async ({ params }: { params: { id: string } }) => {
  let product;

  try {
    product = await GetByID({ params });
  } catch (error) {
    return <h2>You've got an errro X-X</h2>;
  }
  const videoId = product.gameplayVideo;

  return (
    <>
      <Container>
        <div className={style.ProductLeft}>
          <div className={style.ProductTop}>
            <h2 className={style.ProductName}>{product.name}</h2>
            <img src={product.image} alt="" />
          </div>
          <iframe
            width="100%"
            height="600"
            className="w-full aspect-video self-stretch md:min-h-96"
            src={product.gameplayVideo}
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className={style.ProductRight}>
          <div className={style.ProductDesc}>
            <h3>{product.description}</h3>

            <div className={style.ProductImages}>
              <img src={product.sliderImageOne} alt="" />
              <img src={product.sliderImageTwo} alt="" />
              <img src={product.sliderImageThree} alt="" />
            </div>
          </div>
        </div>
        <div className={style.ProductPurchase}>
          <h1>Purchase Info:</h1>
          <div className={style.PurchaseInfo}>
            <DeleteButton id={product.id} />
            <h2 className={style.ProductPrice}>{product.price}$</h2>
            <button className={style.SendToCart}>Add To Cart</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
