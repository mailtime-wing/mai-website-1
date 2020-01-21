import React from "react"
import { Global, css } from "@emotion/core"

import "normalize.css"
import "@/fonts/roboto.css"
import "@/fonts/barlow-condensed.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TalkToUs from "@/components/TalkToUs"

const global = theme => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${theme.fonts.body};
    font-weight: 300;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input {
    border-radius: 0;
    background-color: transparent;
  }
`

const main = css`
  overflow-x: hidden; /* added to cater fade-in animation */
`

const Layout = ({ children, headerMode }) => {
  return (
    <>
      <Global styles={global} />
      <Header headerMode={headerMode} />
      <main css={main}>{children}</main>
      <Footer />
      <TalkToUs />
    </>
  )
}

export default Layout
