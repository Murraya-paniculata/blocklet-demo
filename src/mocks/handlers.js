import { rest } from 'msw';

// data mock for jest test
export const handlers = [rest.get("https://blockchain.info/rawblock/", (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            "hash":"00000000e7f89d2ee842c8be0fabdcfb16fd633a27d2033c1e8afde8251f1381",
            "block_index": 8888
        })
    )
})]