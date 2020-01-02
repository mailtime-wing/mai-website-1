import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import PhoneInput from "./PhoneInput"
import InputBox from "@/components/InputBox"
import TextInput from "@/components/TextInput"

import { message, inputContainer, textInput } from "./style"

const LabelTextInput = ({ label, id, ...props }) => (
  <InputBox css={inputContainer} label={label} labelFor={id}>
    <TextInput css={textInput} id={id} {...props} />
  </InputBox>
)

const Callback = () => {
  return (
    <form>
      <p css={message}>
        <FormattedMessage
          id="callbackMessage"
          defaultMessage="Enter your phone number and we’ll call you back asap."
        />
      </p>
      <PhoneInput css={inputContainer} />
      <LabelTextInput label="Name" id="name" />
      <LabelTextInput label="Company Name" id="companyName" />
    </form>
  )
}

export default Callback
