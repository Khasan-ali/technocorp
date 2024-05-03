import { useTranslations } from "next-intl";
import Hero from '../../modules/Admin/Home/Hero/page'


export default function Home() {

  const t = useTranslations('IndexPage')
  console.log(t('title'));

  return <div>
  <div className="container">
    {/* <h1>{t('title')}</h1>
    <p>{t('description')}</p> */}
    <Hero />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sequi consequuntur optio ducimus tenetur animi, perspiciatis vel corporis similique, eos provident unde maiores obcaecati, aut laudantium eveniet hic commodi. Itaque?</p>
  </div>
</div>
}
