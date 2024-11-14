import Link from 'next/link'
import React from 'react'

// {name: "Lice", reportsInArea: 3, totalReports: 3, userHas: false}
export default function IllnessThumbnail({ illness }) {
  return (
    <tr className='border-2 border-black'>
      <td className='border-2 border-black p-3'>{ illness.name }</td>
      <td className='border-2 border-black text-center'>{ illness.reportsInArea }</td>
      <td className='border-2 border-black text-center'>{ illness.totalReports }</td>
      {illness.userHas ? <td className='border-2 border-black text-center'>Yes</td> : <td className='border-2 border-black text-center'>No</td> }
    </tr>
  )
}
