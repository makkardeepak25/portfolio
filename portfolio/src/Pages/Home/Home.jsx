import React from 'react'
import { Container,Intro,Hello,Myname,Dev,Button } from './Home.styled'
import { Link } from 'react-router-dom'

export  function Home() {
    return (
        <Container>
            <Intro>
                <Hello>नमस्ते..!</Hello>
                <Myname>I'm Deepak Makkar</Myname>
                <Dev>Creative Developer</Dev>
                <Link to="/about"><Button>Learn More</Button></Link>
</Intro>
            
        </Container>
    )
}
