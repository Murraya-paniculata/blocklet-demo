import { useEffect } from 'react';
import Search from '../components/Search';
import { connect } from 'dva';
import Abstract from '../components/Abstract'
import Tx from '../components/Tx'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { FaBtc } from 'react-icons/fa'

function Home(props) {
  const {tx, ...abstract} = props.blockData || {};
  const abstractKeys = Object.keys(abstract);

  const leftAbstract = abstractKeys.slice(0, Math.ceil(abstractKeys.length / 2)).map((key) => {
    return <Abstract key={key} k={key} obj={abstract} />
  })

  const rightAbstract = abstractKeys.slice(Math.ceil(abstractKeys.length / 2), abstractKeys.length).map((key) => {
    return <Abstract key={key} k={key} obj={abstract} />
  })

  useEffect(() => {
    if(props.loading) {
      Nprogress.start();
    } else {
      Nprogress.done();
    }
  }, [props.loading, Nprogress])
  
  return (
    <div className='mt-4'>
        <Search onSearchQuery={props.onSearchQuery} loading={props.loading} />
        {
          props.blockData.error 
          && <div className='text-center text-info mt-4'>
            <span className='fs-2'>Oops! We couldn't find what you are looking for.</span><br />
            <span className='fs-5'>Please enter an address, transaction hash, block height or hash</span>
          </div>
        }
      { props.blockData.block_index && 
        <div>
          <h3 className='py-2 my-2 px-4 d-flex align-items-center justify-content-center' style={{fontFamily: "'Open Sans'"}}>
            <FaBtc />Bitcoin Block
            <span>{abstract.block_index && abstract.block_index.toLocaleString()}</span>
          </h3>
          <div className='row px-4'>
            <div className='col-sm-12 col-xl-6'>
              <div className="bg-light border rounded-3 container mb-1 sticky-top">
                <h4 className='p-2 border-bottom'>Abstract</h4>
                <div className='row my-2 p-2'>
                  <div className="col-sm-12 col-md-6" style={{gap: '5px 0'}}>{ leftAbstract }</div>
                  <div className='col-sm-12 col-md-6' style={{gap: '5px 0'}}>{ rightAbstract }</div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-xl-6'>
              <div className='bg-light rounded-3 pb-2 container'>
                { tx && <Tx tx={tx} /> }
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({onSearchQuery: (payload) => dispatch({ type: 'blockData/searchQuery', payload})})
const mapStateToprops = (state) => ({ blockData: state.blockData, loading: state.loading.global})

export default connect(mapStateToprops, mapDispatchToProps)(Home);
