
import React from 'react'
import { Link, LinksFunction, useSearchParams } from 'remix'
import gallery from '../../galleries/home-made-witches'
import styles from '~/styles/gallery.css'

const IMAGES_PER_PAGE = 9
const INDEX_PARAM = 'i'
const PAGE_PARAM = 'p'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

const PREVIOUS_LABEL = 'Previous'
const NEXT_LABEL = 'Next'

export default function Index() {
  const [searchParams] = useSearchParams()

  const { images, title, subtitle } = gallery
  const photoIndexParam = searchParams.get(INDEX_PARAM)
  const photoIndex = photoIndexParam ? parseInt(photoIndexParam) : undefined
  const pageParam = searchParams.get(PAGE_PARAM)
  const page = (pageParam ? parseInt(pageParam) : undefined) || 0

  const totalPages = Math.floor(images.length / IMAGES_PER_PAGE) + (images.length % IMAGES_PER_PAGE > 0 ? 1 : 0)
  const pageImages = images.slice(page * IMAGES_PER_PAGE, page * IMAGES_PER_PAGE + IMAGES_PER_PAGE)

  return <>
    <div className='main'>
      <h2>{ title }</h2>
      <h3>{ subtitle }</h3>
      <div className='gallery'>
        <ul className='thumbnails'>
          { pageImages.map((image, index) =>
            <li className='thumbnail' key={index}>
              <Link to={`?${PAGE_PARAM}=${Math.floor((index + page * IMAGES_PER_PAGE) / IMAGES_PER_PAGE)}&${INDEX_PARAM}=${index + page * IMAGES_PER_PAGE}`}>
                <div>
                  <img src={image.thumbnail} alt=''/>
                </div>
              </Link>
            </li>
          )}
        </ul>
        <ul className='pages'>
          { [...Array(totalPages)].map((_, index) =>
            <li className={`page${page === index ? ' active' : ''}`} key={index}>
              { page === index
                ? index + 1
                : <Link to={`?${PAGE_PARAM}=${index}`}>{ index + 1 }</Link> }
            </li>) }
            <li className='page previous'>
              { page > 0
                ? <Link to={`?${PAGE_PARAM}=${page - 1}`}>{ PREVIOUS_LABEL }</Link>
                : PREVIOUS_LABEL }
            </li>
            <li className='page next'>
              { page + 1 < totalPages
                ? <Link to={`?${PAGE_PARAM}=${page + 1}`}>{ NEXT_LABEL }</Link>
                : NEXT_LABEL }
            </li>
        </ul>
      </div>
    </div>
    { typeof photoIndex === 'number' &&
      <div className='modal'>
        <div className='content'>
          <Link to={`?${PAGE_PARAM}=${page}`}>
            <div className='outer'>
              <div className='inner'>
                <div className='frame'>
                  <img src={images[photoIndex].original} alt=''/>
                  <div className='description'>
                    { images[photoIndex].description?.split('\n').map(text => <>{ text }<br /></>) }
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div> }
  </>
}
