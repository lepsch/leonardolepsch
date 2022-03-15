
import React from 'react'
import { Link, useSearchParams } from 'remix'

const CONTACT_PARAM = 'contact'

export default function Index() {
  const [searchParams] = useSearchParams()
  const showContact = searchParams.get(CONTACT_PARAM) === '1'

  return (
    <div className='mainpage'>
      <div className='content'>
        <ul className='menu'>
          <li>
            <Link to='/home-made-witches'>Home Made Witches</Link>
          </li>
          <li>
            <Link to='/burano'>Burano</Link>
          </li>
          <li>
            <Link to='/pipa'>Pipa</Link>
          </li>
          <li>
            <Link to='/portugal-pequeno'>Portugal Pequeno</Link>
          </li>
          <li>
            <Link to='/rio-das-pedras'>Rio das Pedras</Link>
          </li>
          <li>
            <Link to='/mills-flour'>Mill's Flour</Link>
          </li>
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
