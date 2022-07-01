export function mockDataSource(item) {
  const data = item.map((res) => {
    return { key: res.dataIndex ?? res.key }
  })
  let nub = 0
  return [...Array(10)].map(() => {
    const returnData = { id: nub }
    nub++
    data.forEach((item) => {
      returnData[item.key] = nub
      nub++
    })
    return returnData
  })
}
