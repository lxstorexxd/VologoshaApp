import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Slider = () => {
    const products = [
        {
            name: "Коктейль молочный «ШОКОЛАДНЫЙ»",
            description: "Коктейль молочный пастеризованный «ШОКОЛАДНЫЙ» с массовой долей жира 2,7%",
            color: "#642D21",
            picture: "/bottle/choco.png"
        },
        {
            name: "Коктейль молочный «КЛУБНИЧНЫЙ»",
            description: "Коктейль молочный пастеризованный Клубничный «Вологоша» 2,4%",
            color: "#951402",
            picture: "/bottle/strawberry.png"
        },
        {
            name: "Коктейль молочный «ВАНИЛЬНОЕ МОРОЖЕНОЕ»",
            description: "Коктейль молочный пастеризованный Ванильное мороженое «Вологоша» 2,5%",
            color: "#515d8c",
            picture: "/bottle/vanilla.png"
        },
        {
            name: "Коктейль молочный «СЛИВОЧНАЯ ИРИСКА»",
            description: "Коктейль молочный пастеризованный Сливочная ириска «Вологоша» 2,5%",
            color: "#4e770a",
            picture: "/bottle/iris.png"
        },
        {
            name: "Коктейль молочный «БАНАНОВЫЙ»",
            description: "Коктейль молочный пастеризованный «Банановый» с массовой долей жира 2,5%",
            color: "#aa990e",
            picture: "/bottle/banana.png"
        },
        {
            name: "Коктейль молочный «МАНГО-ДЫНЯ»",
            description: "Коктейль молочный пастеризованный Манго - Дыня «Вологоша» 2,5%",
            color: "#cbaf4d",
            picture: "/bottle/mango.png"
        },
        {
            name: "Коктейль молочный «ПИНА-КОЛАДА»",
            description: "Коктейль молочный пастеризованный «ПИНА-КОЛАДА» с массовой долей жира 2,5%",
            color: "#a0dece",
            picture: "/bottle/pina-colada.png"
        },
    ];


    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    products.map((data, idx) => (
                        <SwiperSlide className="border-2 border-solid h-full border-[#efeeed] rounded-xl shadow-xl" key={idx}>
                            <div className={`rounded-xl flex flex-col gap-2 items-center justify-between w-full h-full px-[10%] py-6 bg-[${data.color}]/60`}>
                                <div className="relative w-full max-w-xs aspect-square">
                                    <div style={{ background: data.color }} className="absolute top-0 left-0 w-full h-full rounded-full"></div>
                                    <img className="relative z-10" src={data.picture} alt="logo" />
                                </div>
                                <h1 className="text-lg md:text-2xl font-extrabold select-none" style={{ color: data.color }}>{data.name}</h1>
                                <p className="text-base md:text-xl overflow-hidden">{data.description}</p>
                                <button style={{ background: data.color }} className="swiper-button">Узнать</button>
                            </div>  
                        </SwiperSlide>
                    ))
                }
            </Swiper >
            <style global jsx>{`
                .swiper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .swiper-button {
                    width: 80%;
                    padding: .4rem 1rem;
                    border-radius: 8px;
                    user-select: none;
                }
            `}</style>
        </>

    )
}

export default Slider;
