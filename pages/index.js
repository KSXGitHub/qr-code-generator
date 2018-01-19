import AnalogClock, {Themes} from 'react-analog-clock'
import Remarkable from 'react-remarkable'

export default () => <section>
  <Remarkable>
    Why create your own clock when you can just use others'
    [prebuilt component](https://goo.gl/tb3fFb)?
  </Remarkable>
  <main>
    <AnalogClock theme={Themes.dark} />
  </main>
  <footer>
    <Remarkable>
      Created by [Hoàng Văn Khải](https://github.com/KSXGitHub) &copy; 2017.
    </Remarkable>
    <Remarkable>
      Powered by [AnalogClock](https://goo.gl/tb3fFb) and [Next.js](https://goo.gl/pTP4B1).
    </Remarkable>
    <Remarkable>
      Source code is available at [GitHub/KSXGitHub/analog-clock](https://goo.gl/V6Bff4).
    </Remarkable>
  </footer>
</section>
