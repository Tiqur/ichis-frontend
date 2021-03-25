import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import { useState } from 'react';


const Container = styled.div`
  margin: 0 auto;
  width: 250px;
  height: 200px;
  position: relative;
  perspective: 1000px;
`;

const Carousel = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: 800ms;
  transform: rotateY(${props => props.degY}deg);
`;

const ImageDiv = styled.img`
    display: block;
    position: absolute;
    height: 150px;
    margin: 0px 5px 0px 5px;
    background: blue;
    transition: 300ms;
    transform: rotateY(${props => props.degY}deg) translateZ(250px);
`;

const Gallery = (props) => {

    const children = props.children;
    const [currentDegrees, setCurrentDegrees] = useState(0);
    const degreesY = 360 / children.length;

    return (
        <Container>
            <Carousel degY={currentDegrees} onClick={() => {setCurrentDegrees(currentDegrees + degreesY)}}>
                {children.map(e => <ImageDiv src={e.props.src} degY={degreesY*(props.children.indexOf(e))}></ImageDiv>)}
            </Carousel>
        </Container>
    )
};

export default Gallery;