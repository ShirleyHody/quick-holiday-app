import React from 'react'
import ResultsList from './ResultsList'


const data = [{
  placeName: 'Stockholm',
  image: 'https://picsum.photos/id/237/5000/5000',
  description: 'some info about this place, blah blah blah blah blah blah blah blah',
  sellingPoints: ['Landmarks', 'Food', 'Nightlife'],
  weather: {
    temperature: 20
  },
  flight: {
    price: 25000
  }
}]

const ResultsPage = () => {
  return (
    <>
      <h1>Results</h1>
      <ResultsList data={data} />
    </>
  )
}

export default ResultsPage
