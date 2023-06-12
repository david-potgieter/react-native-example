export function getData() {
  return new Promise((resolve, reject) => {
    import('../data/leader-board.json')
      .then(data => {
        resolve(data ?? [])
      })
      .catch(error => {
        reject(error)
      })
  })
}
