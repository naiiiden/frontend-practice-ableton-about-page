import React from 'react'

const JobListing = ({ href, jobTitle, jobLocation }) => {
  return (
    <li><a className="job--listing--link" href={href}><span className="job--title">{jobTitle}</span><span className="job--location">{jobLocation}</span></a></li>
  )
}

export default JobListing