import Link from 'next/link'
export default function Home() {
  return (
    <>
    <h1><center> Service Page </center></h1>
    <br />
    <center>
    <Link href="/">Home</Link> |
    <Link href="/about">about</Link> |
    <Link href="/service">service</Link> |
    <Link href="/contact">contact</Link>
    </center>
    </>
  );
}