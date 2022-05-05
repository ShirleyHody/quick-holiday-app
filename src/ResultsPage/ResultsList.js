import React from 'react'
import { List, Tag, Image, Empty} from 'antd'


// placeName: 'Stockholm',
// image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo-street-scene-in-gamla-stan-stockholm-sweden-scandinavia-europe-79469056.html&psig=AOvVaw3N7FjZCk1FOZyxUwPW_Q5X&ust=1651834244624000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjB15-YyPcCFQAAAAAdAAAAABAD',
// description: 'some info about this place, blah blah blah blah blah blah blah blah',
// sellingPoints: ['Landmarks', 'Food', 'Nightlife'],
// weather: {
//   temperature: 20
// },
// flight: {
//   price: 25000
// }

const ResultsList = ({ data }) => {
  if (data.length === 0) return <Empty />
  return (
    <List
      itemLayout="horizontal"
      size="large"
      pagination={false}
      dataSource={data}
      renderItem={item => (
        <List.Item
          key={item.title}
        >

          <List.Item.Meta
            avatar={<Image
              width={300}
              alt="logo"
              src={item.image}
            />}
            title={item.placeName}
            description={
              <>
                {item.description}
                <div>
                {item.sellingPoints.map(sellingPoint => (
                  <Tag color='#44c21e'>{sellingPoint}</Tag>
                ))}
                </div>
            </>}
          />

          <h1 style={{ color: 'red', fontSize: '' }}>£{item.flight.price / 100}</h1>
        </List.Item>
      )}
    />
  )
}

export default ResultsList
