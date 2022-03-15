import Gallery from './Gallery'

import _01 from '~/images/portugal-pequeno/01.jpg'
import _02 from '~/images/portugal-pequeno/02.jpg'
import _03 from '~/images/portugal-pequeno/03.jpg'
import _04 from '~/images/portugal-pequeno/04.jpg'
import _05 from '~/images/portugal-pequeno/05.jpg'
import _06 from '~/images/portugal-pequeno/06.jpg'
import _07 from '~/images/portugal-pequeno/07.jpg'
import _08 from '~/images/portugal-pequeno/08.jpg'
import _09 from '~/images/portugal-pequeno/09.jpg'
import _10 from '~/images/portugal-pequeno/10.jpg'
import _11 from '~/images/portugal-pequeno/11.jpg'
import _12 from '~/images/portugal-pequeno/12.jpg'
import _13 from '~/images/portugal-pequeno/13.jpg'

import _01_t from '~/images/portugal-pequeno/thumbnails/01.jpg'
import _02_t from '~/images/portugal-pequeno/thumbnails/02.jpg'
import _03_t from '~/images/portugal-pequeno/thumbnails/03.jpg'
import _04_t from '~/images/portugal-pequeno/thumbnails/04.jpg'
import _05_t from '~/images/portugal-pequeno/thumbnails/05.jpg'
import _06_t from '~/images/portugal-pequeno/thumbnails/06.jpg'
import _07_t from '~/images/portugal-pequeno/thumbnails/07.jpg'
import _08_t from '~/images/portugal-pequeno/thumbnails/08.jpg'
import _09_t from '~/images/portugal-pequeno/thumbnails/09.jpg'
import _10_t from '~/images/portugal-pequeno/thumbnails/10.jpg'
import _11_t from '~/images/portugal-pequeno/thumbnails/11.jpg'
import _12_t from '~/images/portugal-pequeno/thumbnails/12.jpg'
import _13_t from '~/images/portugal-pequeno/thumbnails/13.jpg'


const images: Gallery['images'] = [
  {
    original: _01,
    thumbnail: _01_t,
  },
  {
    original: _02,
    thumbnail: _02_t,
  },
  {
    original: _03,
    thumbnail: _03_t,
  },
  {
    original: _04,
    thumbnail: _04_t,
  },
  {
    original: _05,
    thumbnail: _05_t,
  },
  {
    original: _06,
    thumbnail: _06_t,
  },
  {
    original: _07,
    thumbnail: _07_t,
  },
  {
    original: _08,
    thumbnail: _08_t,
  },
  {
    original: _09,
    thumbnail: _09_t,
  },
  {
    original: _10,
    thumbnail: _10_t,
  },
  {
    original: _11,
    thumbnail: _11_t,
  },
  {
    original: _12,
    thumbnail: _12_t,
  },
  {
    original: _13,
    thumbnail: _13_t,
  },
]

const gallery: Gallery = {
  id: 'portugal-pequeno',
  images,
  title: 'Portugal Pequeno',
}

export default gallery
