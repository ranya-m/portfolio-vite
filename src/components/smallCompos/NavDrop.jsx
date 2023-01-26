import React from 'react';

export default function NavDrop ({href, text, setToggle}) {
  return (
    <div>
      <div onClick={(prev) => setToggle(!prev)}>
        <a href={href} className='text-m sm:text-xl  text-mainDark text-lg hover:bg-purple hover:text-mainLight py-2 px-4 rounded-lg dark:text-mainLight'>{text}</a>
      </div>
    </div>
  )
}
