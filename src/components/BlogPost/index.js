import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  blogPostContainer,
  image,
  postContainer,
  tagAndDateContainer,
  date,
  title,
  content,
  dot,
  blogTag,
  // viewCountContainer,
  // viewCountImage,
  // viewCount,
  readMore,
  anchor,
} from "./style"
import Tag from "@/components/Tag"
// import viewCountIcon from "@/images/icon-view@3x.png"

const BlogTag = props => <Tag css={blogTag} {...props} />

const BlogPost = ({ children, postData, ...props }) => {
  // Format Blog Date
  const dateStr = postData.date.toString()
  const Year = dateStr.split("-")[0]
  const Month = dateStr.split("-")[1]
  const Day = dateStr.split("-")[2].slice(0, 2)
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const formattedDate = monthArr[Month - 1] + " " + Day + ", " + Year

  // html tag regex
  const removeHtmlRegex = /(<([^>]+)>)/gi

  return (
    <div css={theme => blogPostContainer(theme)}>
      <a
        css={anchor}
        href={postData.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;
      </a>
      <img
        css={image}
        src={postData.better_featured_image.source_url}
        alt="Wordpress Post"
      />
      <div css={postContainer}>
        <div css={tagAndDateContainer}>
          <BlogTag>#{postData.categories[0].name}</BlogTag>
          <p css={date}>{formattedDate}</p>
        </div>
        <div css={theme => title(theme)} {...props}>
          {postData.title}
          {children}
        </div>
        <div css={theme => content(theme)}>
          {postData.content.replace(removeHtmlRegex, "")}
        </div>
        <p css={readMore}>
          <FormattedMessage id="readMore" defaultMessage="Read more..." />
        </p>
        {/* <div css={viewCountContainer}>
          <img css={viewCountImage} src={viewCountIcon} alt="View Count"/>
          <p css={viewCount}>320</p>
        </div> */}
        <div css={dot} />
      </div>
    </div>
  )
}

export default BlogPost
