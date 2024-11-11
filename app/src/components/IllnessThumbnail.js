import React from 'react'

// {name: "Lice", reportsInArea: 3, totalReports: 3, userHas: false}
export default function IllnessThumbnail({ illness }) {
  return (
    <div>
      <p>{illness.name}</p>
    </div>
  )
}
