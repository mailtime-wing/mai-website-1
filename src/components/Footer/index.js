import React, { useState, forwardRef } from "react"
import {
  Menu,
  // MenuList,
  // MenuButton,
  MenuItem as ReachMenuItem,
  // MenuLink,
  // MenuPopover,
  MenuItems,
} from "@reach/menu-button"
import "@reach/menu-button/styles.css"

import Callback from "./Callback"

import {
  container,
  content,
  // helpButton,
  // helpSymbol,
  popoverContainer,
  popoverHeader,
  closeButton,
  closeSymbol,
  popoverBody,
  menuItems,
  menuItem,
  menuItemImage,
} from "./style"
import CallbackIconSrc from "@/images/ico-help-01.svg"

const MenuItem = forwardRef(({ src, text, alt, ...props }, ref) => (
  <ReachMenuItem css={menuItem} ref={ref} {...props}>
    <img
      css={menuItemImage}
      src={CallbackIconSrc}
      width={32}
      height={32}
      alt={alt}
    />
    {text}
  </ReachMenuItem>
))

const Footer = () => {
  const [showCallback, setShowCallback] = useState(false)
  return (
    <footer css={container}>
      <div css={content}>
        <Menu>
          <div css={popoverContainer}>
            <div css={popoverHeader}>
              HELP
              <button css={closeButton} onClick={() => setShowCallback(false)}>
                <div css={closeSymbol} />
              </button>
            </div>
            <div css={popoverBody}>
              {showCallback && <Callback />}
              {!showCallback && (
                <MenuItems css={menuItems}>
                  <MenuItem
                    onSelect={() => setShowCallback(true)}
                    src={CallbackIconSrc}
                    text="Request a callback"
                  />
                  <MenuItem
                    onSelect={() => alert("Copy")}
                    src={CallbackIconSrc}
                    text="Leave a message"
                  />
                </MenuItems>
              )}
            </div>
          </div>
        </Menu>
      </div>
    </footer>
  )
}

export default Footer
