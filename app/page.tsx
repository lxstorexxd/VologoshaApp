"use client";

import WebPacketSvg from "./components/WebPacketSvg"
import Slider from "./components/Slider";


export default function Home() {
  const data = { name: "Михаил", avatar: "/avatar.png", comment: "Очень нравится клубничный микс, просто огонь 🔥", stars: 5 };
  const reviews = Array.from({ length: 5 }, () => data);


  return (
    <main>
      <header
        className="
          flex
          items-center
          justify-between
          w-full
          px-[10%]
          py-4
          absolute
          top-0
          left-0
          z-10
        "
      >
        <div className="flex">
          <div className="w-12 h-12"><WebPacketSvg name="logo" /></div>
          <div
            className="
              flex
              flex-col
              justify-center
              font-semibold
              leading-5
              text-lg
              text-[var(--color-primary)]
              logotype-animate
            "
          >
            <h1>Наше</h1>
            <h1>Вологодское</h1>
          </div>
        </div>

        <ul className="hidden lg:flex logotype-ulist gap-6 items-center">
          <li className="active"><a href="#home">Главная</a></li>
          <li><a href="#catalog">Продукция</a></li>
          <li><a href="#">О Нас</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <button type="button" className="w-10 h-10 lg:hidden rounded-lg">
          <WebPacketSvg name="bx-menu" />
        </button>
        <style global jsx>{`
                li {
                    position: relative;
                    font-size: 18px;
                }
                li.active::after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  border-bottom: 3px solid #efeeed;
                }
            `}</style>
      </header>

      <section
        className="
          flex
          items-center
          justify-center
          min-page
          bg-[var(--bg-primary)]
        "
        id="home"
      >

        <div className="relative flex flex-col-reverse xl:flex-row justify-between w-full items-center z-10">
          <div className="text-animate w-full max-w-xl">
            <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-center xl xl:text-left">
              <h1><span className="px-4 md:bg-rose-900 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl">Молочные коктейли</span></h1>
              <h1>Вологодчины</h1>
            </div>
            <p className="mt-4 text-lg text-center xl:text-left font-normal leading-5">Вологодский молочный комбинат является крупнейшим предприятием на Северо-Западе России.</p>
          </div>
          <div className="w-full max-w-md aspect-square rotate-12"><img src="/vol-def.png" alt="product" /></div>
        </div>

        <div
          className="
            absolute
            top-1/2
            right-64
            -translate-y-1/2
            w-1/5
            aspect-square
            rounded-full
            light
            ring-animate
          "
        ></div>
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-500/10 backdrop-blur-[40px]"></div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <WebPacketSvg name="waves" />
        </div>
      </section>
      <section
        className="
          relative
          flex
          flex-col
          items-center
          justify-center
          min-page
          h-screen
          line-screen
        "
        id="catalog"
      >
        <h1 className="heading">Каталог продукции</h1>
        <div className="w-full h-2/3">
          <Slider />
        </div>
      </section>

      <section id="about"></section>

      <section className="reviews min-page overflow-hidden" id="reviews">
        <h1 className="heading z-20">Отзывы</h1>
        <div className="flex w-full h-screen justify-center items-center">
          <div className="relative flex flex-wrap justify-center items-center gap-4 w-full z-20">
            {reviews.map((data, idx) => (
              <div key={idx} className="w-full max-w-sm border-2 border-solid border-white rounded-lg p-4 bg-white/40 shadow-black/40 shadow-[1px_1px_15px]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-8"><img src={data.avatar} alt="Avatar" /></div>
                  <div>
                    <h1 className="text-lg font-semibold text-black leading-5">{data.name}</h1>
                    <div className="flex">
                      <div className="w-4 h-4"><WebPacketSvg name="black-star" /></div>
                      <div className="w-4 h-4"><WebPacketSvg name="black-star" /></div>
                      <div className="w-4 h-4"><WebPacketSvg name="black-star" /></div>
                      <div className="w-4 h-4"><WebPacketSvg name="white-star" /></div>
                      <div className="w-4 h-4"><WebPacketSvg name="white-star" /></div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-5">{data.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-[20px] z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-rose-600 shadow-rose-600 shadow-[0_0_120px_90px] rounded-full"></div>
        <div className="absolute top-3/4 left-2/4 w-48 h-48 bg-yellow-600 shadow-yellow-600 shadow-[0_0_120px_90px] rounded-full"></div>
        <div className="absolute top-2/4 left-3/4 w-48 h-48 bg-sky-600 shadow-sky-600 shadow-[0_0_120px_90px] rounded-full"></div>
      </section>

      <section className="flex flex-col min-page bg-[var(--bg-secondary)]" id="contact">
        <h1 className="heading !text-white after:!bg-white">Контакты</h1>
        <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="w-full max-w-xl aspect-square rounded-xl overflow-hidden">
            <img src="/map.png" alt="map" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-xl font-semibold">Юридический и фактический адрес</h1>
              <p className="text-gray-300">ПК "Вологодский молочный комбинат":160017, Вологодская область, г. Вологда, Пошехонское шоссе, д. 14</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Приёмная председателя производственного кооператива </h1>
              <div className="text-gray-300">
                <p className="leading-6">Телефон: (8172) 71-27-93</p>
                <p className="leading-6">Факс: (8172) 71-93-28</p>
                <p className="leading-6">E-mail: pkvmk@pkvmk.ru</p>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Заместитель председателя по развитию</h1>
              <div className="text-gray-300">
                <p className="leading-6">Телефон: (8172) 71-14-10</p>
                <p className="leading-6">Факс: (8172) 71-14-10</p>
                <p className="leading-6">E-mail: sheveleva_iv@pkvmk.ru</p>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Директор розничной торговлиТелефон:</h1>
              <p className="text-gray-300 leading-6">Телефон: (8172) 71-14-30</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
