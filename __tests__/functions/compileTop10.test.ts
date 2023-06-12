import { compileTop10 } from '../../src/state/helpers/compileTop10'

describe('compileTop10', () => {
  const players = [
    { name: 'Player1', bananas: 113, rank: 0 },
    { name: 'Player2', bananas: 112, rank: 0 },
    { name: 'Player3', bananas: 111, rank: 0 },
    { name: 'Player4', bananas: 110, rank: 0 },
    { name: 'Player5', bananas: 109, rank: 0 },
    { name: 'Player6', bananas: 108, rank: 0 },
    { name: 'Player7', bananas: 107, rank: 0 },
    { name: 'Player8', bananas: 106, rank: 0 },
    { name: 'Player9', bananas: 105, rank: 0 },
    { name: 'Player10', bananas: 104, rank: 0 },
    { name: 'Player11', bananas: 103, rank: 0 },
    { name: 'Player12', bananas: 102, rank: 0 },
    { name: 'Player13', bananas: 101, rank: 0 },
  ]

  it('returns an empty array when no name is specified', () => {
    expect(compileTop10(players)).toEqual([])
  })

  it('returns an array of the top 10 players, when a name is specified and exists', () => {
    const top10 = compileTop10(players, 'Player1')
    expect(top10.length).toBe(10)
    expect(top10[0].isSearchedUser).toBe(true)
  })

  it('replaces the last player in the top 10 with the searched player if they are not already in the top 10', () => {
    const top10 = compileTop10(players, 'Player3')
    expect(top10.length).toBe(10)
    expect(top10[9].name).toBe('Player10')
    expect(top10[2].isSearchedUser).toBe(true)
  })

  it('returns an empty array when the specified name does not exist', () => {
    const top10 = compileTop10(players, 'NonExistentPlayer')
    expect(top10).toEqual([])
  })
})
