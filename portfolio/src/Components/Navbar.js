import styled from "styled-components";
import {Link} from "react-router-dom"


export const Nav = styled.div`
background-color: #181818;
display: flex;
justify-content: space-between;
height: 40px;
padding:8px 10px;
position: fixed;
width:100vw;
top: 0;
z-index:100000;
`
export const LinkDec = styled(Link)`
text-decoration: none;
color:#E8E8E8;
font-size:20px;
font-weight:600;
&:focus{
    text-decoration: underline;
}
`
export const Img = styled.img`
width:30%;
height:30px;
`
export const Links = styled.div`
display: flex;
width: 40%;
justify-content: space-between;
padding-right: 50px;
`
export const Button = styled.button`
color: black;
background-color:#D3D3D3;
padding: 3px 5px;
font-size: 20px;
font-weight:600;
border: none;
outline: none;
border-radius:15px;
cursor: pointer;
margin-top: 5px;
&:hover{
    background-color: black;
color:#D3D3D3;
}
`