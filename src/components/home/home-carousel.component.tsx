import Carousel from 'react-bootstrap/Carousel';

export default function HomeCarouselComponent() {
    return (
        <div className='bg-dark'>
            <Carousel>
                <Carousel.Item>
                    <img height={300} src='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/18725/images/PuRv7TFRzGdNsmp3iRmj_Tetons.jpg' />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img height={300} src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/IjBZwEKWSXmRkHRd1DnE_MountKiddSilhouette.jpg' />

                </Carousel.Item>
                <Carousel.Item>
                    <img height={300} src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/gga5HfWGQWSiO3udSRgl_Tetons.jpg' />

                </Carousel.Item>
            </Carousel>
        </div>
    );
}