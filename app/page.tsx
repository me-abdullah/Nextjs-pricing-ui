import React from 'react';
import styles from './page.module.css';
import Header from './header';
import { Inter } from "@next/font/google";
import { Features } from './features';
import { Pricing } from './pricing';
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className='App'>
      <Header />
      <Pricing />
      <Features/>
    </div>
  )
}
