import { atom } from 'recoil'
import { ProductProps } from './Category/page'

export const Cartatom = atom<ProductProps[]>({
    key:'Cardatom',
    default:[]
})