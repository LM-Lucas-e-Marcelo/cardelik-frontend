import houseThumb from '../assets/thumbnails/house.png'
import houseImg from '/house.png'
import fgtsThumb from '../assets/thumbnails/fgts.png'
import fgtsImg from '/fgts.jpg'
import carThumb from '../assets/thumbnails/car.png'
import carImg from '/financing.jpg'

import {
  PiHouseLineBold,
  IoCarSportOutline,
  TbFileDollar,
} from '../assets/icons'

export const PRODUCTS = [
  {
    id: 1,
    thumb: houseThumb,
    title: 'Consórcios',
    icon: PiHouseLineBold,
    image: houseImg,
    description:
      'O consórcio é a opção mais inteligente para conquistar seu carro, imóvel ou moto sem pagar juros! Planeje-se, escolha o melhor plano para você e realize seus sonhos com a Cardelik.',
  },
  {
    id: 2,
    thumb: carThumb,
    title: 'Financiamentos',
    icon: IoCarSportOutline,
    image: carImg,
    description:
      'Com condições flexíveis e de segurança, oferecemos opções de financiamento para você conquistar seu objetivo sem comprometer seu orçamento. Encontre o melhor solução, entre em contato conosco.',
  },
  {
    id: 3,
    thumb: fgtsThumb,
    title: 'FGTS',
    icon: TbFileDollar,
    image: fgtsImg,
    description:
      'Use seu FGTS para acelerar a conquista do seu bem! Com ele, você pode oferecer lances, reduzir parcelas ou até quitar sua carta de crédito, tornando o consórcio ainda mais vantajoso.',
  },
]
