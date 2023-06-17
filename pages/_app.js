import '@/styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import 'swiper/css';
import { useEffect } from "react";
import Aos from 'aos';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    Aos.init();
  }, []);

  return <Component {...pageProps} />
}
