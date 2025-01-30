
import { montserrat, noto_sans } from "@/app/ui/fonts";

export default function Home() {
  return (
    <div>
      <h1 className={`${montserrat.className} text-xl font-bold antialiased`}>Lotto RNG</h1>
      <p className={`${noto_sans.className} text-s font-normal text-fuchsia-600 antialiased`}>Generate </p>

      <main></main>
      <footer></footer>
    </div>
  );
}
