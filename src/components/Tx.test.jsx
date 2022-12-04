import Tx from "./Tx"
import { render, screen } from "@testing-library/react"

test('should render Tx', () => {
    const txs = [
        {
            "hash": "eb9e16e63d83fd7d8735a64ff8e72eda3571c709a6d772f72b71e4e6254e5050",
            "ver": 1,
            "vin_sz": 1,
            "vout_sz": 1,
            "size": 135,
            "weight": 540,
            "fee": 0,
            "relayed_by": "0.0.0.0",
            "lock_time": 0,
            "tx_index": 2825786838801550,
            "double_spend": false,
            "time": 1232510363,
            "block_index": 1212,
            "block_height": 1212,
            "inputs": [
                {
                    "sequence": 4294967295,
                    "witness": "",
                    "script": "04ffff001d02d608",
                    "index": 0,
                    "prev_out": {
                        "n": 4294967295,
                        "script": "",
                        "spending_outpoints": [
                            {
                                "n": 0,
                                "tx_index": 2825786838801550
                            }
                        ],
                        "spent": true,
                        "tx_index": 0,
                        "type": 0,
                        "value": 0
                    }
                }
            ],
            "out": [
                {
                    "type": 0,
                    "spent": false,
                    "value": 5000000000,
                    "spending_outpoints": [],
                    "n": 0,
                    "tx_index": 2825786838801550,
                    "script": "41049952bf66b19aad8aeda7bdfb469b667c06b474af06c2d9ea4fbe532b879ff660fc3611e28926e2c4491557e61800b4531b2fe86156d50a4656f276d18272c067ac",
                    "addr": "1KEMwA6Vr1AkB3GyHYEd9N3G2KR91j5SPX"
                }
            ]
        }
    ]
    render(<Tx tx={txs} />)
    expect(screen.getByText("Transactions")).toBeInTheDocument()
 })