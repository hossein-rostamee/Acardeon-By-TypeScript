import React ,{ FC } from 'react'
import styled from 'styled-components' 
import { Item } from './Acareon'
import { ItemShow } from './ItemShow'

const Context = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-gap: 18px;
    width: 690px;
    margin: auto;
    background: grey;
`

export interface AcardeonShowProps {
    items: Item[]
    activeItem: number
    onClickFunc: ( event: any ) => void
}

export const AcardeonShow: FC< AcardeonShowProps > = ({
    activeItem, items, onClickFunc
}) => <Context>
    { items.map( (item , i ) => <ItemShow activeItem={ activeItem } title={ item.title } content={ item.content } index = { i } onClickFunc={ onClickFunc } key = { item.id } /> ) }
</Context>

