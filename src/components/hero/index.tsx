import { HeroForm } from './hero-form'
import { motion } from 'framer-motion'
import logo from '../../assets/footer/logo.png'

export const Hero = () => {
  return (
    <div className="w-full md:h-screen bg-blue-600 flex bg-[url(/hero.png)] md:bg-center bg-top-left bg-cover overflow-x-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-8 flex items-center justify-center py-10 flex-wrap md:justify-around gap-6">
        <motion.div
          className="flex flex-col gap-8 md:items-start items-center"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="logo" className="md:w-[300px] w-[200px]" />
          <h1 className="md:text-5xl text-4xl md:text-start text-center max-w-[500px] font-primary text-white">
            O caminho mais seguro para suas grandes realizações!
          </h1>
        </motion.div>
        <HeroForm />
      </div>
    </div>
  )
}
