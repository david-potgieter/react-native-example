import { getData } from '@rn-tools/state/fetch/getData'
import { useQuery } from '@tanstack/react-query'

export function useLeaderBoard() {
  return useQuery({ queryKey: ['leader-board'], queryFn: getData })
}
