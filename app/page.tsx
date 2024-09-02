import Image from "next/image";
import styles from "./styles/page.module.css";
import HomeView from './components/main/views/home/HomeScreen';


export default function Home() {
  return (
    <main>
      <HomeView />
    </main>
  );
}
