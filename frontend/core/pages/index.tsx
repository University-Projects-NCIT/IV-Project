import Head from 'next/head'
import Test from '../components/test'


export default function Home() {
  return (
    <div>
      <p className = "text-red-500">
        Hello Next 
        <Test/>
      </p>
    </div>
  )
}
