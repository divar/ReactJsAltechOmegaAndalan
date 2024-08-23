import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className={"flex flex-col items-center justify-center w-full h-full content-center"}>
        <div className="flex flex-row items-center justify-center w-full mt-8">
          <div className={"lg:basis-1/5"}></div>
          <div className={"lg:basis-1/5"}></div>
          <div className={"lg:basis-1/3"}>
            <p className="font-sans text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start w-full mt-40">
          <div className={"lg:basis-1/3"}>
            <div>
              <p className="font-sans text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Image src={"/undraw.svg"} width={300} height={300} layout="intrinsic" alt="undraw"/>
          </div>
        </div>
      </div>
    </main>
  );
}
