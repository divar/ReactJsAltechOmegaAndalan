import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={"flex flex-row justify-center h-full content-center"}>
      <div className={"w-1/3"}></div>
      <div className={"w-1/3 content-center text-center"}>
          <span className={"content-center font-bold text-3xl"}>Not Found</span>
          <p>Could not find requested resource</p>
          <Link className={"text-blue-700"} href="/">Return Home</Link>
      </div>
      <div className={"w-1/3"}></div>
    </div>
  )
}
