import { atomWithReset } from 'jotai/utils'

export const searchStringAtom = atomWithReset<string | undefined>(undefined)
