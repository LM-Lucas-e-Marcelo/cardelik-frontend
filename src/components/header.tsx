import { NAV_BAR_ITEMS } from '../constants/nav'
import logo from '../assets/short-logo.png'

export const Header = () => {
  return (
    <header className="bg-white px-4 fixed top-0 left-0 right-0 z-10">
      <div className="w-full flex h-[70px] items-center gap-[100px] max-w-[1440px] mx-auto px-[16px]">
        <img src={logo} alt="Logo" width={100} />
        <nav>
          <ul className="flex items-center gap-8 text-lg">
            {Object.entries(NAV_BAR_ITEMS).map(([key, value]) => (
              <li className="text-secondary hover:underline" key={key}>
                <a href={value.link}>{key}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
