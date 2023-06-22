import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export default function Header() {
  return (
    <section>
      <div className="overflow-hidden w-auto block absolute top-0 right-0 left-0 bottom-0 m-0 p-0 max-w-none max-h-none object-cover">
        <Image
          className="h-full bg-left"
          src={"/home-banner-image-1-2048x1097.jpeg"}
          style={{ objectFit: "cover" }}
          width={2521}
          height={1350}
          loading="lazy"
          sizes="(max-width: 2521px) 100vw, 2521px"
        ></Image>
      </div>
      <header>
        <div className="absolute w-full top-1/4 mt-12 text-center">
          <div>
            <p className="md:text-6xl lg:text-6xl sm:text-6xl xl:text-6xl/normal text-4xl text-white font-extralight">
              Our timeless jewellery collections
            </p>
          </div>
          <div>
            <p className="xl:text-xl lg:text-xl md:text-lg sm:text-lg text-lg text-white mt-7 font-extralight">
              Designed for the way you live your life. Banchangtong are{" "}
              <br></br> beautiful in their simplicity.
            </p>
          </div>

          <button className="w-64 h-14 mt-12 rounded-full bg-orange-500 text-white text-lg">
            Go to shop
          </button>
        </div>
      </header>
    </section>
  );
}
