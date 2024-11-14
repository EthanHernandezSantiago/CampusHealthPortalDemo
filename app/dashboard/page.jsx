import React from 'react'
import Header from '../src/components/Header'
import IllnessThumbnail from '../src/components/IllnessThumbnail'
import data from '../illness'
import Link from 'next/link';

export default function page() {

  let illness = data;

  return (
    <div>
        <Header />
        <div className='flex'>
          <table className='border-2 border-black'>
            <thead>
              <tr>
                <th className='border-2 border-black text-center p-4'>Name</th>
                <th className='border-2 border-black text-center p-4'>Reports In Area</th>
                <th className='border-2 border-black text-center p-4'>Total Reports</th>
                <th className='border-2 border-black text-center p-4'>Has User Reported</th>
              </tr>
            </thead>
            <tbody>
            {illness.map((i, k) => <IllnessThumbnail key={k} illness={i}  /> )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="text-center">*NOTE: Reports are only what user have reported*</td>
              </tr>
            </tfoot>
          </table>
          <figure className='border-2 border-black'>
            <img src='MapPhoto.jpg' width={780} className='border-2 border-black'/>
            <figcaption className='p-2'>
              <p className='text-2xl'>Location Selected - <strong>Hays, Kansas</strong></p>
              <p className='text-2xl'>Pin's Location - <strong>730 W 12st Street</strong></p>
              <p className='text-xl'>Move pin to change to look at reports in other areas</p>
              <p>(Photo Source: <Link href="https://www.google.com/search?q=google+maps+hays+ks&sca_esv=68c7045c12d3d683&udm=2&tbas=0&source=lnt&sa=X&ved=2ahUKEwip1KiwwNqJAxXj5skDHRdQPAQQpwV6BAgFEB8&cshid=1731542013126780&biw=1470&bih=798&dpr=2#vhid=vcouXG6WmnFmcM&vssid=mosaic">Source</Link>)</p>
            </figcaption>
          </figure>
        </div>
      </div>
  )
}
