import React from 'react'
import style from "./style.module.scss"
import { Container } from '@mui/material'

const Footer = () => {
  return (
    <>
    <div className={style.footerCont}>
        <Container>
            <div className={style.leftFooter}>
                <h3 className={style.FooterMainText}>GurcuKhinkali</h3>
                <h5 className={style.FooterText}>The store that you are currently checking was made by the @GurcuKhinkali corporation in 2024</h5>
            </div>
        </Container>
    </div>
    </>
)
}

export default Footer