import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../constants/data';
import { styled } from '@mui/material';

const Image = styled('img')(({ theme }) => ({
    height: 300,
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 190
    }
}));

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Banner = () => {
  return (
    <Carousel responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              keyBoardControl={true}
              slidesToSlide={1}
              autoPlay={true}
              autoPlaySpeed={4000}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              containerClass="carousel-container"
    >
          {
            bannerData.map(data => (
                <Image src={data.url} alt="Banner-Image" key={data.id} />
            ))
          }
    </Carousel>
  )
}

export default Banner;
