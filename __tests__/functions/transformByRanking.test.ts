import { transformByRanking } from '../../src/state/helpers/transformByRanking'

describe('transformByRanking', () => {
  it('sorts players correctly and assigns rank', () => {
    const players = [
      { name: 'Player1', bananas: 200, rank: 0 },
      { name: 'Player2', bananas: 300, rank: 0 },
      { name: 'Player3', bananas: 100, rank: 0 },
    ]

    const result = transformByRanking(players)

    expect(result).toEqual([
      { name: 'Player2', bananas: 300, rank: 1 },
      { name: 'Player1', bananas: 200, rank: 2 },
      { name: 'Player3', bananas: 100, rank: 3 },
    ])
  })
})
