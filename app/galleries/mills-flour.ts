import Gallery from './Gallery'

import _01 from '~/images/mills-flour/01.jpg'
import _02 from '~/images/mills-flour/02.jpg'
import _03 from '~/images/mills-flour/03.jpg'
import _04 from '~/images/mills-flour/04.jpg'
import _05 from '~/images/mills-flour/05.jpg'
import _06 from '~/images/mills-flour/06.jpg'
import _07 from '~/images/mills-flour/07.jpg'
import _08 from '~/images/mills-flour/08.jpg'

import _01_t from '~/images/mills-flour/thumbnails/01.jpg'
import _02_t from '~/images/mills-flour/thumbnails/02.jpg'
import _03_t from '~/images/mills-flour/thumbnails/03.jpg'
import _04_t from '~/images/mills-flour/thumbnails/04.jpg'
import _05_t from '~/images/mills-flour/thumbnails/05.jpg'
import _06_t from '~/images/mills-flour/thumbnails/06.jpg'
import _07_t from '~/images/mills-flour/thumbnails/07.jpg'
import _08_t from '~/images/mills-flour/thumbnails/08.jpg'

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
]

const gallery: Gallery = {
  id: 'mills-flour',
  images,
  title: "Mill's Flour",
}

export default gallery
