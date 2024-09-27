"use client";

import React from "react";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { createProduct } from "../(actions)/product";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import Uploader from "../example-uploader/page";

interface FormData {
  name: string;
  description: string;
  price: number;
  image: string;
  sliderImageOne: string;
  sliderImageTwo: string;
  sliderImageThree: string;
  gameplayVideo: string;
}
const Page = () => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <div className={style.pageWrapper}>
      <Container maxWidth="md">
        <Paper elevation={3} className={style.formContainer}>
          <Typography variant="h4" component="h1" className={style.title}>
            Create a New Product
          </Typography>

          <form action={createProduct} className={style.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Product Name"
                  {...register("name")}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Price"
                  type="number"
                  inputProps={{ step: "0.01" }}
                  {...register("price")}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Main Image URL"
                  {...register("image")}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  {...register("description")}
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Slider Image 1 URL"
                  {...register("sliderImageOne")}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Slider Image 2 URL"
                  {...register("sliderImageTwo")}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Slider Image 3 URL"
                  {...register("sliderImageThree")}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Gameplay Video URL"
                  {...register("gameplayVideo")}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      
    </div>
  );
};

export default Page;
