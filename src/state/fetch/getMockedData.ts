import { PlayerInfo } from '@rn-tools/types/app-types'

export function getMockedData() {
  return new Promise((resolve, reject) => {
    return import('../data/leader-board.json')
      .then(data => {
        const transformed = Object.keys(data).map(key => ({
          uid: key,
          ...data[key],
        })) as PlayerInfo[]
        const sorted = transformed.sort((a, b) => b.bananas - a.bananas)
        resolve(sorted)
      })
      .catch(error => reject(error))
  })
}

// import('../../state/data/leader-board.json').then(json => {
//   console.log('json', json)
// })
