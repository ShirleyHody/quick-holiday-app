import React from 'react'

import { Image, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import photo from '../lisbon.jpeg'
import weather from '../weather.png'
import flightDetails from '../flightDetails.png'

const ResultsPage = () => {
  const goToOtherPage = () => {
    window.location = 'https://booking.flytap.com/booking/flights/deeplink?market=GB&origin=LHR&destination=L[…]utm_campaign=googleflights&language=EN&networkName=GOOGLEFS'
  }
  return (
    <>
    <div style={{ padding: '20px' }}>
      <h1>Lisbon, Portugal</h1>
      <Image src={photo} />
      <Image src={weather} style={{ marginTop: '10px'}}/>
      <Image src={flightDetails} />


    </div>
    <div style={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%'}}>
    <Button type="primary" size="large" block style={{marginBottom: '15px'}} onClick={goToOtherPage}>Book me</Button>
    Show me another
    <br />
    <DownOutlined style={{ fontSize: '25px', fontWeight: 'bold'}}/>
    </div>
    </>
  )
}

export default ResultsPage
