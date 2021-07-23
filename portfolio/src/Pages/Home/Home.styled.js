import styled from "styled-components"


export const Container = styled.div`
margin-top: 50px;
background-image: url('${process.env.PUBLIC_URL}/banner.jpg');
height:92.8vh;
width:100%;
background-size: cover;
filter: grayscale(100%);


`
export const Intro = styled.div`
margin-left:40%;
margin-right:15%;
padding-top: 20%;
text-align: right;
color:white;
`
export const Hello = styled.div`
font-size:30px;
`
export const Dev = styled.div`
font-size:70px;
font-weight:700;
`
export const Myname = styled.div`
font-size:50px;
font-weight:600;
`
export const Button = styled.button`
color: black;
background-color:#D3D3D3;
padding: 10px;
font-size: 30px;
border: none;
border-radius:15px;
margin:10px;
cursor: pointer;
&:hover{
    background-color: black;
color:#D3D3D3;
}

`
