import { Carousel } from 'react-bootstrap';
export default function WishCategoryItemsComponent() {
    return (
        <div className=''>
            <Carousel>
                <Carousel.Item>
                    <div className='d-flex' style={{ justifyContent: 'space-evenly' }}>
                        <div className='category-tile border curved' style={{ width: 'fit-content' }}>
                            <div className='category-image bg-secondary' style={{ height: '7rem', width: '7rem' }}></div>
                            <div className='bg-white text-dark text-center'>use this</div>
                        </div>

                        <div className='category-tile border curved' style={{ width: 'fit-content' }}>
                            <div className='category-image bg-secondary' style={{ height: '7rem', width: '7rem' }}></div>
                            <div className='bg-white text-dark text-center'>use this</div>
                        </div>

                        <div className='category-tile border curved' style={{ width: 'fit-content' }}>
                            <div className='category-image bg-secondary' style={{ height: '7rem', width: '7rem' }}></div>
                            <div className='bg-white text-dark text-center'>use this</div>
                        </div>
                    </div>

                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-flex' style={{ justifyContent: 'space-evenly' }}>
                        <div className='category-tile border curved' style={{ width: 'fit-content' }}>
                            <div className='category-image bg-secondary' style={{ height: '7rem', width: '7rem' }}></div>
                            <div className='bg-white text-dark text-center'>use this</div>
                        </div>

                        <div className='category-tile border curved' style={{ width: 'fit-content' }}>
                            <div className='category-image bg-secondary' style={{ height: '7rem', width: '7rem' }}></div>
                            <div className='bg-white text-dark text-center'>use this</div>
                        </div>

                        <div className='category-tile border curved' style={{ width: 'fit-content' }}>
                            <div className='category-image bg-secondary' style={{ height: '7rem', width: '7rem' }}></div>
                            <div className='bg-white text-dark text-center'>use this</div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}