import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex w-full ">
        <nav className="w-full py-4 bg-teal-600">
          <div className=" max-w-5xl flex justify-between mx-auto">
            <div>
              <a href="/">JayPortfolio</a>
            </div>
            <div>
              <ul className="flex">
                <li className="pl-5">
                  <a href="/">Home</a>
                </li>
                <li className="pl-5">
                  <a href="/">Work</a>
                </li>
                <li className="pl-5">
                  <a href="/">About</a>
                </li>
                <li className="pl-5">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="hidden md:flex justify-center relative overflow-hidden h-full ">
        <Image
          src={"/atombg2.jpg"}
          alt="sectionimage"
          height={600}
          width={1640}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black from-2%" />
        <span className="absolute pt-40 text-5xl pr-[600px]">
          <h1 className="... bg-clip-text text-slate-300">
            My Name is Junaid{" "}
          </h1>
          <h1 className="... bg-clip-text text-slate-300">
            I am a Web Developer{" "}
          </h1>
        </span>
      </div>
    </main>
  );
}
