import { Carousel } from 'bootstrap';
import React from 'react';

const ImageCarousel = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBob3RvZ3JhcGh5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBob3RvZ3JhcGh5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBob3RvZ3JhcGh5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default ImageCarousel;