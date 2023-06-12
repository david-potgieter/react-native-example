import { findPlayerByName } from '../../src/state/helpers/findPlayerByName'

describe('findPlayerByName', () => {
  const players = [
    { name: 'Jayne Su YueHe', bananas: 400, rank: 1, isSearchedUser: false },
    { name: 'Юрий Юр', bananas: 300, rank: 2, isSearchedUser: false },
    { name: '王連辟', bananas: 200, rank: 3, isSearchedUser: false },
    { name: '', bananas: 100, rank: 4, isSearchedUser: false },
  ]
  it('returns correct index of player with specified name', () => {
    expect(findPlayerByName(players, ' Jayne Su YueHe ')).toBe(0)
    expect(findPlayerByName(players, 'JAYNE su YUEHE')).toBe(0)
    expect(findPlayerByName(players, 'Юрий Юр    ')).toBe(1)
    expect(findPlayerByName(players, '王連辟 ')).toBe(2)
  })

  it('returns -1 when player with specified name is empty, or not found', () => {
    expect(findPlayerByName(players, 'George')).toBe(-1)
    expect(findPlayerByName(players, '')).toBe(-1)
  })
})
