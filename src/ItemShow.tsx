import React ,{ FC } from 'react'
import styled from 'styled-components'

export const ItemDiv = styled.div< { index: number, onClick: ( event: any ) => void } >`
    direction: rtl;
    .sub{
        background: linear-gradient( to left, #0EC9E1 , #076571);
        border-radius: 5px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-areas: "title empty arrows";
        > h3 {
            grid-area: title;
            font-size: 16px;
            color: #FFFFFF;
            margin: 18px 24px 18px 0;
        }
        .arrow-down{
            grid-area: arrows;
            margin: 25px 0 25px 24px;
            width: 15px; height: 9px;
        }
        transition: inherit;
    }
    transition: all 1s ease;
    .content{
        background: #FFFFFF;
        border-radius: 0 0 5px 5px;
        display: grid;
        grid-template-rows: auto 1fr;
        grid-gap: 18px;
        opacity: 0.92;
        transition: inherit;
        > p {
            margin: 24px 24px 0px 24px;
            text-align: justify;
            line-height: 34px;
            font-size: 14px;
        }
        > a {
            display: grid;
            grid-template-columns: auto auto;
            align-content: center;
            align-items: center;
            margin: 0 574px 24px 24px;
            > span {
                font-size: 14px;
                color: #FFA000;
            }
            > img {
                color: #FFA000;
                width: 24px; height: 24px;
            }
        }
        & {
            height: 0;
            display: none;
        } 
    }
    &.active-item{
        .sub{
            background: linear-gradient( to right, #FF4600 , #FFA000);
            border-radius: 5px 5px 0 0;
            > img {
                transform: rotate( 180deg );
            }
        }
        .content{
            height: auto;
            display: grid;
        }
    }
`

export interface ItemShowProps{
    activeItem: number
    title: string
    content: string
    index: number
    onClickFunc: ( event: any ) => void
}

export const ItemShow: FC< ItemShowProps > = ({
    activeItem, content, index, title, onClickFunc
}) => <ItemDiv className={ index === activeItem ? 'active-item' : '' } index={ index } onClick={ ( event: any ) => onClickFunc( index ) }>
    <div className="sub">
        <h3>{ title }</h3>
        <img src={ require( "./images/round-keyboard_arrow_down-24px.svg" ) } className='arrow-down' />
    </div>
    <div className="content">
        <p>{ content }</p>
        <a>
            <span>بیشتر بدانید</span>
            <img src={ require( "./images/round-arrow_back-24px.svg" ) } />
        </a>
    </div>
</ItemDiv>