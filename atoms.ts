import { atom } from 'jotai'

const sidebarStateAtom = atom(false)
const currentPageAtom = atom("home")

export { sidebarStateAtom, currentPageAtom }