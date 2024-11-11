import React from 'react'
import Header from '../src/components/Header'
import IllnessThumbnail from '../src/components/IllnessThumbnail'

export default function page() {

  let illness = [
    {name: "Common Cold", reportsInArea: 5, totalReports: 25, userHas: false},
    {name: "Chickenpox", reportsInArea: 10, totalReports: 15, userHas: false},
    {name: "Coronavirus (COVID-19)", reportsInArea: 7, totalReports: 10, userHas: false},
    {name: "Food Posining", reportsInArea: 20, totalReports: 23, userHas: false},
    {name: "Malaria", reportsInArea: 1, totalReports: 1, userHas: false},
    {name: "Pneumonia", reportsInArea: 2, totalReports: 3, userHas: false},
    {name: "Whooping Cough", reportsInArea: 1, totalReports: 3, userHas: false},
    {name: "Yellow Fever", reportsInArea: 7, totalReports: 8, userHas: false},
    {name: "E Coli", reportsInArea: 20, totalReports: 30, userHas: false},
    {name: "Lice", reportsInArea: 3, totalReports: 3, userHas: false},
   ]

  return (
    <div>
        <Header />
        <table></table>
        {illness.map((i, k) => <IllnessThumbnail key={k} illness={i} /> )}
    </div>
  )
}
