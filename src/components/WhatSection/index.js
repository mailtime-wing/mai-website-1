import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Fade from "react-reveal/Fade"

import {
  container,
  contentContainer,
  whatSectionItemContainer,
  whatSectionItemContainer1,
  whatSectionItemContainer2,
  whatSectionItemContainer3,
} from "./style"
import Card from "./Card"

import ThreeWHeader from "@/components/ThreeWHeader"
import what01Icon from "@/images/what-01.svg"
import what02Icon from "@/images/what-02.svg"
import eCommerceIcon from "@/images/what-eCommerce.svg"
import useMedia from "@/hooks/useMedia"

const DELAY = 300

const contentArr1 = [
  {
    id: "uberEats",
    defaultMessage: "UberEats",
    stockMsgId: "uberEatsStockSymbol",
  },
  {
    id: "foodpanda",
    defaultMessage: "Foodpanda",
    stockMsgId: "foodpandaStockSymbol",
  },
  { id: "deliveroo", defaultMessage: "Deliveroo" },
  { id: "grabFood", defaultMessage: "GrabFood" },
  { id: "iFood", defaultMessage: "iFood" },
  { id: "rappi", defaultMessage: "Rappi" },
  { id: "glovo", defaultMessage: "Glovo" },
]

const contentArr2 = [
  { id: "uber", defaultMessage: "Uber", stockMsgId: "uberStockSymbol" },
  { id: "grab", defaultMessage: "Grab" },
  { id: "gojek", defaultMessage: "Gojek" },
  { id: "lyft", defaultMessage: "Lyft", stockMsgId: "lyftStockSymbol" },
  { id: "beat", defaultMessage: "Beat" },
  { id: "99", defaultMessage: "99" },
  { id: "ola", defaultMessage: "Ola" },
]

const contentArr3 = [
  { id: "amazon", defaultMessage: "Amazon", stockMsgId: "amazonStockSymbol" },
  { id: "shopee", defaultMessage: "Shopee", stockMsgId: "shopeeStockSymbol" },
  { id: "lazada", defaultMessage: "Lazada", stockMsgId: "lazadaStockSymbol" },
  { id: "tokopedia", defaultMessage: "Tokopedia" },
  {
    id: "flipkart",
    defaultMessage: "Flipkart",
    stockMsgId: "flipkartStockSymbol",
  },
  {
    id: "mercadoLibra",
    defaultMessage: "Mercado Libra",
    stockMsgId: "mercadoLibraStockSymbol",
  },
  {
    id: "magazineLuiza",
    defaultMessage: "Magazine Luiza",
    stockMsgId: "magazineLuizaStockSymbol",
  },
]

const WhatSection = () => {
  const isDesktop = useMedia([false, false], true)

  return (
    <div css={container}>
      <Fade refProp="innerRef" left>
        <ThreeWHeader
          header={<FormattedMessage id="what" defaultMessage="WHAT" />}
          subHeader={
            <FormattedMessage id="doWeCover" defaultMessage="do we cover" />
          }
          questionMark={
            <FormattedMessage id="questionMark" defaultMessage="?" />
          }
        />
      </Fade>
      <div css={contentContainer}>
        <Fade refProp="innerRef" right>
          <Card
            css={[whatSectionItemContainer, whatSectionItemContainer1]}
            src={what01Icon}
            alt="Food Delivery"
            contentTitle={
              <FormattedMessage
                id="foodDelivery"
                defaultMessage="Food Delivery"
              />
            }
            contents={contentArr1}
          />
        </Fade>
        {isDesktop ? (
          <>
            <Fade refProp="innerRef" right delay={DELAY}>
              <Card
                css={[whatSectionItemContainer, whatSectionItemContainer2]}
                src={what02Icon}
                alt="RIDE-HAILING"
                contentTitle={
                  <FormattedMessage
                    id="rideHailing"
                    defaultMessage="RIDE-HAILING"
                  />
                }
                contents={contentArr2}
              />
            </Fade>
            <Fade refProp="innerRef" right delay={DELAY * 2}>
              <Card
                css={[whatSectionItemContainer, whatSectionItemContainer3]}
                src={eCommerceIcon}
                alt="E-COMMERCE"
                contentTitle={
                  <FormattedMessage
                    id="eCommerce"
                    defaultMessage="E-COMMERCE"
                  />
                }
                contents={contentArr3}
              />
            </Fade>
          </>
        ) : (
          <>
            <Fade refProp="innerRef" right delay={DELAY}>
              <Card
                css={[whatSectionItemContainer, whatSectionItemContainer3]}
                src={eCommerceIcon}
                alt="E-COMMERCE"
                contentTitle={
                  <FormattedMessage
                    id="eCommerce"
                    defaultMessage="E-COMMERCE"
                  />
                }
                contents={contentArr3}
              />
            </Fade>
            <Fade refProp="innerRef" right delay={DELAY * 2}>
              <Card
                css={[whatSectionItemContainer, whatSectionItemContainer2]}
                src={what02Icon}
                alt="RIDE-HAILING"
                contentTitle={
                  <FormattedMessage
                    id="rideHailing"
                    defaultMessage="RIDE-HAILING"
                  />
                }
                contents={contentArr2}
              />
            </Fade>
          </>
        )}
      </div>
    </div>
  )
}

export default WhatSection
