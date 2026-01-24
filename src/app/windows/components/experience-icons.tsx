import React from 'react'
import { Cursor } from '@react95/core'
import styles from './styles.module.scss'
import { Shell322 } from '@react95/icons'
import PAST_ROLES from '@/data/experience'

type ModalControls = [boolean, () => void, () => void]

function ExperienceShortcuts({
  experiences,
}: {
  experiences: ModalControls[]
}) {
  return (
    <div>
      <div
        className={styles.componentScope}
        style={{
          width: '100%',
          background: 'white',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        {experiences.map(([, open], index) => (
          <div
            key={index}
            className={Cursor.Pointer}
            onClick={() => {
              open()
            }}
            style={{
              backgroundColor: 'white',
              height: 100,
            }}
          >
            <Shell322
              variant="32x32_4"
              style={{ marginLeft: 32, marginTop: 5 }}
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
              {(() => {
                const c = PAST_ROLES?.[index]?.company ?? ''
                return c.length > 15 ? c.slice(0, 15) + '...' : c
              })()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceShortcuts
