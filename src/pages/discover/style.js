import styled from "styled-components";

export const DiscoverWrapper = styled.div`
    .top {
        height: 30px;
        background-color: #c20c0c;
    }
`

export const TopMenu = styled.div`
    display: flex;
    padding-left: 160px;
    position: relative;
    top: -4px;
    margin-bottom: 6px;
    .item{
        a{
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding: 0 13px;
            margin: 4px 17px 0;
            color: #ffffff;


            &:hover,&.active{
                background-color: #9b0909;
                text-decoration: none;
                border-radius: 20px;
            }
        }   
    }
`