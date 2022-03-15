
import React from 'react'
import { Link, useSearchParams } from 'remix'
import galleries from '~/galleries'

const CONTACT_PARAM = 'contact'

export default function Index() {
  const [searchParams] = useSearchParams()
  const showContact = searchParams.get(CONTACT_PARAM) === '1'

  return (
    <div className='mainpage'>
      <div className='content'>
        <ul className='menu'>
          { galleries.map(gallery =>
            <li key={gallery.id}>
              <Link to={gallery.id}>{ gallery.title }</Link>
            </li>) }
          <li className='contact-menu'>
            <Link to={`?${CONTACT_PARAM}=1`}>Contact</Link>
          </li>
        </ul>
        <div className={`cover ${showContact ? 'contact' : 'main'}`}>
          { showContact &&
            <div className='contact'>
              <a href='mailto:lepschleonardo@gmail.com'>lepschleonardo@gmail.com</a>
            </div> }
        </div>
      </div>
      <div className='designer'>
        <a href='mailto:stratozell@alice.it'>designed by Pavan Andrea</a>
      </div>
    </div>
  )
}
