import Image from '../components/image'
import title from '../models/title'

export default () => <section>
  <header>
    <h1>
      {title}
    </h1>
  </header>
  <main>
    <Image
      src='/static/waterfalls.jpg'
      alt='Waterfalls'
      style={{
        width: '50%',
        height: '50%'
      }}
    />
  </main>
</section>
