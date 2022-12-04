import React, { useState } from 'react'
import { Pagination, Table, Collapse } from 'antd'
import moment from 'moment'

const { Panel } = Collapse;

export default function Tx({tx}) {
    const [pages, setPages] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const columns = [
        {
          title: 'FORM',
          dataIndex: 'inputs',
          key: 'inputs',
          render: (_, text) => <>
              { text.inputs.map((item) => {
                return <div style={{height: 40}} className="mb-2">
                  { item.prev_out.addr ?
                    <span className='text-warning'>{item.prev_out.addr.substring(0,9) + '-' + item.prev_out.addr.substring(item.prev_out.addr.length-10, item.prev_out.addr.length) }</span>
                    : 'coinbase' }
                    <br />
                  { item.prev_out.value && <span>{(item.prev_out.value/100000000).toFixed(8)} BTC</span> }
                </div>
              }) }
            </>
        },
        {
          title: 'TO',
          dataIndex: 'out',
          key: 'out',
          render: (_, text) => <>
            { text.out.map((item) => {
              return <div style={{height: 40}} className="mb-2">
                <span className='text-warning'>{item.addr.substring(0,9) + '-' + item.addr.substring(item.addr.length-10, item.addr.length) }</span>
                <br/><span>{(item.value/100000000).toFixed(8)} BTC</span></div>
            }) }
          </>
        }
    ];
    return (<>
        <h4 className='p-2 border-bottom'>Transactions</h4>
        <Collapse defaultActiveKey={1} data-collapse>
            {tx.slice((pages - 1) * pageSize, (pages - 1) * pageSize + 10).map((item, index) => <Panel key={index}
            header={<div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex flex-column justify-content-center'>
                <div>{`TX${index} ~ Hash`}<span className='ps-2 text-warning'>{`${item.hash.substring(0, 5)}-${item.hash.substring(item.hash.length -5 , item.hash.length)}`}</span></div>
                <div>{moment(parseInt(item.time * 1000)).format("YYYY/MM/DD HH:mm:ss")}</div>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                <div>0.00323 BTC</div>
                <div>Fee <span>{item.fee}</span></div>
                </div>
            </div>}>
                <Table pagination={false} columns={columns} dataSource={[{index: index+'',...item }]} />
            </Panel>)}
            </Collapse>
        { tx.length > 10 && <div className='p-2 text-end'><Pagination onChange={(page) => setPages(page)} defaultCurrent={1} total={tx.length} /></div>}
        </>
    )
}