export async function queryData (blockHash) {
    const data = await fetch(`https://blockchain.info/rawblock/${blockHash}`).then((res) => res.json())
    return data;
}
