import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Banner = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (

        <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            swipeable={false}
            draggable={false}
            keyBoardControl={true}
            // dotListClass="custom-dot-list-style"

            className='tracking-wide text-white max-h-96 '
        >
            <div className="relative w-full h-full">
                < Image src="/images/image-1.jpg" width={600} height={460} className="w-full h-full " alt="Slide 1" />
                <div className="absolute  md:bottom-16 buttom-8 text-center  w-full">
                    <h5 className='font-semibold'>Third slide label</h5>
                    <p className='font-normal text-xs mt-3'>Some representative placeholder content for the third slide.</p>
                </div>
            </div>

            <div className="relative w-full h-full">
                <Image src="/images/image-2.jpg" width={600} height={460} className="w-full h-full" alt="Slide 2" />
                <div className="absolute md:bottom-16 buttom-8 text-center w-full">
                    <h5 className='font-semibold'>Third slide label</h5>
                    <p className='font-normal text-xs mt-3'>Some representative placeholder content for the third slide.</p>
                </div>
            </div>

            <div className="relative w-full h-full">
                <Image src="/images/image-3.jpg" width={600} height={460} className="w-full h-full" alt="Slide 3" />
                <div className="absolute  md:bottom-16 buttom-8 text-center  w-full">
                    <h5 className='font-semibold'>Third slide label</h5>
                    <p className='font-normal text-xs mt-3'>Some representative placeholder content for the third slide.</p>
                </div>
            </div>

        </Carousel >
    );
};

export default Banner;
