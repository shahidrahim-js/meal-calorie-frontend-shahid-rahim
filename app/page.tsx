import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <header className="fixed top-0 w-full  z-30 bg-white-500 transition-all  pt-4">
      <nav className="max-w-dvw px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-2 flex items-center">LOGO</div>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <Link href='/login' className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">Login</Link>
          <Link href='/register' className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange">Register</Link>
        </div>
      </nav>
    </header>
    <main className="max-w-dvw pt-24 px-8 xl:px-16 mx-auto min-h-dvh relative">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">Meal Calorie</h1>
          <h3>Count Generator</h3>
          <p className="text-black-500 mt-4 mb-6">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          <Link href='/register' className="py-3 lg:py-3 px-12 lg:px-16 text-white font-semibold rounded-lg border-2 border-orange-500 bg-orange-500 transition-all outline-none undefined capitalize hover:bg-white hover:text-orange-500 hover:border-2 hover:shadow-orange cursor-pointer">Register</Link>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full relative">
            <span className="bg-blue-400 rad absolute -top-2/6 -left-2/6 w-150 h-150 -z-10"></span>
            <span className="box-sizing:border-box display:block overflow:hidden width:initial height:initial background:none opacity:1 border:0 margin:0 padding:0 position:relative">
              <Image src="/meal-trackers.svg"
                alt="Meal Calorie"
                loading="lazy"
                width={400}
                height={400} />
            </span>
            <span className="bg-blue-400 absolute bottom-0 right-0 w-100 h-100 -z-100"></span>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
