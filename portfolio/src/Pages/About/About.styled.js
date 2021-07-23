import styled from "styled-components"

export const StyledHeading = styled.h1`
  font-size: 35px;
  color: #D3D3D3;
  margin: 0;
  border-top: 2px solid #D0D0D0;
  border-bottom: 2px solid #D0D0D0;
  width: 11%;
  margin: auto;
`;
export const Container = styled.div`
background-image: url("https://cutewallpaper.org/21/plain-background-images/Amazon.com-Grey-Blue-Wall-Photography-Background-Plain-.jpg");
height:84.5vh;
width:100%;
background-size: cover;
background-repeat: no-repeat;
padding: 20px;
margin-top: 50px;

`
export const GridCont = styled.div`
display: grid;
grid-template-columns: 60% 30%;
gap:3%;
margin-top:50px;
`
export const Data = styled.div`

`
export const Name = styled.div`
font-size:30px;
color:#D0D0D0;
font-weight:700;
text-align:right;
width: 80%;
line-height:1.1;
margin-bottom: 10px;
`
export const Summary = styled.div`
font-size:20px;
color:#D0D0D0;
line-height:1.5;

width: 80%;
text-align:right;
margin-bottom: 10px;

`
export const Img = styled.img`
border-radius:50%;
width:50%;
border: 10px solid black;
filter: grayscale(100%);

`
export const Expertise = styled.div`
width: 80%;
margin:30px auto;
`
export const Skills = styled.div`
display: grid;
grid-template-columns:repeat(3,1fr);
font-size: 20px;
color: #D0D0D0;
gap: 4%;
margin: 20px;
`
export const HeadExp = styled.div`
font-size:30px;
color: white;
font-weight: 700;
`
export const Button = styled.button`
color: black;
background-color:#D3D3D3;
padding: 5px 5px;
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
export const ProExp = styled.div`
color: #D3D3D3;
font-size:20px;
`