import React from 'react'

export default function Card({item}) {
  return (
    <div style={{display : 'flex' , alignItems:'center' , justifyContent : 'space-between' , padding : '0.8rem 0.7rem' , backgroundColor : 'white' , margin:'5px 0px' , borderRadius : '2px'}}>
        <div style={{display:'flex' , flexDirection : 'column' , alignItems : 'center'}}>
            <div>
                <span style={{fontWeight :'bolder'}}>{item.alert_type}</span>
                <span>• {item.timestamp.substring(0, 10)}</span>
            </div>
            <div>
                Driver : {item.driver_friendly_name} / {item.vehicle_friendly_name}
            </div>
        </div>
        <div>
            <button>Mark As False Alarm</button>
        </div>
    </div>
  )
}
