import React from 'react'
import "./CoursesCategoryCard.css"

const CoursesCategoryCard = ({data}) => {
     function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
  return (
    <div className='courses-category-card'>
        <img src={data.CategoryIcon} alt="" />
        <h3>{truncateText(data.CategoryTitle,16)}</h3>
    </div>
  )
}

export default CoursesCategoryCard