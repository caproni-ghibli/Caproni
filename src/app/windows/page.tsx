'use client'

import '@react95/core/themes/storm.css'
import '@react95/icons/icons.css'

import Desktop from './components/desktop'
import { Cursor } from '@react95/core'

const Windows95 = () => {
  return (
    <div className={Cursor.Auto}>
      <Desktop />
    </div>
  )
}

export default Windows95

// TODO this is no longer blog page is windows95 portfolio so it will get windows icon btn in the navigation
// TODO Add windows startup animation with sound effect
// TODO a link to jump back to where u started ( maybe the windows shutdown btn)
// TODO Folder like this https://github.com/hawwokitty/my-portfolio/blob/main/src/components/RecycleBin.jsx
