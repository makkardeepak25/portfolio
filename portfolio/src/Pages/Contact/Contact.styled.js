import styled from "styled-components"

export const Cont = styled.div`
background-color: #F0F0F0;
padding-top: 4%;
min-height: 90vh;


`

export const Title = styled.div`
border-top: 2px solid #D3D3D3;
color: #404040;
border-bottom: 2px solid #D3D3D3;
text-transform: uppercase;
width:20%;
margin: 1.5% auto;
font-size:47px;

`
export const Social = styled.div`
color: #404040;
border-bottom: 2px solid #002000;
text-transform: uppercase;
width:12%;
margin: 4% auto;
font-size:30px;

`
export const FormLine = styled.div`
color: #404040;
width:42%;
text-align:center;
margin: 1.5% auto;
font-size:28px;
font-weight:700;
line-height:1.6;

`
export const Input = styled.input`
width:24%;
margin: 0.3% auto;
font-size:16px;
font-weight:700;
padding:5px 3px;
color: #404040;

`
export const Textarea = styled.textarea`
width:24%;
margin: 0.3% auto;
font-size:16px;
font-weight:700;
padding:5px 3px;
height: 100px;
color: #D3D3D3;

`
export const InputBtn = styled.input`
width:24%;
margin: 0.3% auto;
font-size:16px;
font-weight:700;
padding:5px 3px;
background-color:#404040;
color:#D3D3D3;
border-radius: 10px;
cursor: pointer;
&:hover{
  color:#404040;
background-color:#D3D3D3;
}
`
export const SocialLinks = styled.div`
width:30%;
margin: 0.3% auto;
display: flex;
justify-content: space-evenly;
`

export const AboutGrid = styled.div`
display: grid;
grid-template-columns: 33% 65%;
gap: 0.1%;
width: 68%;
margin: auto;
min-height:300px;
`
export const Skills = styled.div`
height:200px;
margin-top:5%;
`
export const Img=styled.img`
border-radius: 50%;
height:80%;
width:70%;
margin: auto;
margin-top:1%;
`



