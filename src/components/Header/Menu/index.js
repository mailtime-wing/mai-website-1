import React from "react"

import FreeTrialButton from "@/components/FreeTrialButton"
import LoginButton from "../LoginButton"
import DataInsightButton from "../DataInsightButton"
import LanguageItemList from "../LanguageItemList"

import { menu, menuItem } from "./style"

const Menu = ({ lightModeOn }) => (
  <div css={menu}>
    <LoginButton lightModeOn={lightModeOn} css={menuItem} />
    <DataInsightButton lightModeOn={lightModeOn} css={menuItem} />
    <div css={menuItem}>
      <LanguageItemList />
    </div>
    <div css={menuItem}>
      <FreeTrialButton lightModeOn={lightModeOn} />
    </div>
  </div>
)

export default Menu
