import React from 'react'
import Slider from 'react-slick'
function Carousel() {
    const baseUrl = "src/assets"
    const settingCarousel = {
		dots: <Dots/>,
		fade: true,
		infinite: true,
		speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        
    };

    function Dots(props){
        console.log(props,"ini dots")
        return(
            <ul>

            </ul>
        )
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        // className + " ini"
        console.log(className, "ini Classname")
        return (
          <div
            className={className}
            style={{ ...style,  position: "absolute", top: "50%",right: "2%"  }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,  position: "absolute", top: "50%",left: "2%", zIndex:"9" }}
            onClick={onClick}
          />
        );
      }
    return (
        <Slider {...settingCarousel}>
            <div>
                <img className="w-full object-cover object center h-96" src="https://media.steelseriescdn.com/thumbs/filer_public/96/33/96332caa-3171-4ad5-a9e0-2c35de8af4f5/buyimg-arctispro-wireless_black_001.jpg__1850x800_q100_crop-scale_optimize_subsampling-2.jpg"/>
            </div>
            <div>
                <img className="w-full object-cover object center h-96" src="https://media.steelseriescdn.com/thumbs/filer_public/96/33/96332caa-3171-4ad5-a9e0-2c35de8af4f5/buyimg-arctispro-wireless_black_001.jpg__1850x800_q100_crop-scale_optimize_subsampling-2.jpg"/>
            </div>
            <div>
                <img className="w-full object-cover object center h-96" src="https://media.steelseriescdn.com/thumbs/filer_public/96/33/96332caa-3171-4ad5-a9e0-2c35de8af4f5/buyimg-arctispro-wireless_black_001.jpg__1850x800_q100_crop-scale_optimize_subsampling-2.jpg"/>
            </div>
        </Slider>
    )
}
export default Carousel
