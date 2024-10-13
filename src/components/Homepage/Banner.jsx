import Image from "next/image";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          alt="banner 1"
          src="/assets/images/banner/5.jpg"
          className="w-[1400px] rounded"
          width={1400}
          height={600}
        />
        <div className="absolute rounded-xl flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="space-y-7 text-white pl-12 w-1/2 font-bold">
            <h1 className="text-4xl md:text-6xl">Affordable Price For Car Servicing</h1>
            <p className="text-white font-bold">
              There are many variations of passages of available, but the majority have suffered alteration in some form.
            </p>
            <div className="p-4 flex  ">
              <button className="btn btn-active btn-secondary mr-5  ">Discover More</button>
              <button className="btn btn-outline btn-warning ">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          alt="banner 2"
          src="/assets/images/banner/2.jpg"
          className="rounded-xl"
          width={1400}
          height={600}
        />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          alt="banner 3"
          src="/assets/images/banner/1.jpg"
          className="rounded-xl"
          width={1400}
          height={600}
        />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle bg-zinc-950 mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle bg-red-600">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          alt="banner 4"
          src="/assets/images/banner/6.jpg"
          className="rounded-xl"
          width={1400}
          height={600}
        />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <Image
          alt="banner 5"
          src="/assets/images/banner/4.jpg"
          className="rounded-xl"
          width={1400}
          height={600}
        />
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;