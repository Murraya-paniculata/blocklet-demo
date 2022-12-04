import moment from 'moment';
import React from 'react'

export default function Abstract(props) {
  const {k, obj} = props;

  const formatData = (data, key) => {
    if(key === 'time') {
        return moment(obj[data]).format('YYYY-MM-DD HH:mm:ss')
    }
    if(typeof data === 'boolean') {
        return data ? 'true' : 'false'
    }
    if(typeof data === 'number') {
        return <span>{(data).toLocaleString()}</span>
    }
    if(typeof data === 'string') {
        return <span>{`${data.substring(0,5)}-${data.substring(data.length-5, data.length)}`}</span>
    }
    if(Array.isArray(data)) {
        return <span>{formatData(data[0])}</span>
    }
    return <span>{data}</span>
  }

  return (
    <div className='d-flex'>
        <div className='d-flex flex-column py-1' style={{ width: '40%', textTransform: 'capitalize'}}>{k}</div>
        <div className='d-flex flex-column py-1' style={{ width: '60%', fontFamily: "'Open Sans', sans-serif", color: 'rgb(153, 153, 153)'}}>{formatData(obj[k], k)}</div>
    </div>
  )
}
