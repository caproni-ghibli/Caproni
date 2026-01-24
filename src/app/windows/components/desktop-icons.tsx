import React from 'react'
import { Cursor } from '@react95/core'
import styles from './styles.module.scss'
import { Shell32133, FolderFile, Shell3234 } from '@react95/icons'

interface ShortcutsProps {
  openBlogs: () => void
  openWork: () => void
}

function Shortcuts({ openBlogs, openWork }: ShortcutsProps) {
  return (
    <div
      className={styles.componentScope}
      style={{ width: 100, marginLeft: 10, marginTop: 10 }}
    >
      <div className={Cursor.Pointer} onClick={() => openBlogs()}>
        <FolderFile
          variant="32x32_4"
          style={{ marginLeft: 32, marginTop: 15 }}
        />
        <p
          style={{
            fontFamily: 'MS Sans Serif',
            fontSize: 13,
            justifyContent: 'center',
            marginTop: 5,
            width: 100,
            textAlign: 'center',
            color: 'black',
          }}
        >
          Blogs
        </p>
      </div>
      <div className={Cursor.Pointer} onClick={() => openWork()}>
        <Shell3234
          variant="32x32_4"
          style={{ marginLeft: 32, marginTop: 15 }}
        />
        <p
          style={{
            fontFamily: 'MS Sans Serif',
            fontSize: 13,
            justifyContent: 'center',
            marginTop: 5,
            width: 100,
            textAlign: 'center',
            color: 'black',
          }}
        >
          Work History
        </p>
      </div>
    </div>
  )
}

export default Shortcuts
