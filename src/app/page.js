import Link from 'next/link'

export default function Home() {
  return (
    <div>
       <h1>This is your Home page</h1>
       <p>THis is my first next js app</p>
       <Link href='/about'>About Page</Link><br />
       <Link href='/products'>Products Page</Link><br />
       <Link href='/contact-us'>Contact Us</Link><br />
    </div>
  );
}
