import React from 'react'
import { TitleBar } from '@react95/core'
import { Shell3236, Date } from '@react95/icons'
import * as S from './layout-styling'
import PAST_ROLES from '@/data/experience'

interface ExperienceProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>
  experienceData: (typeof PAST_ROLES)[number]
}

function Experience({ onClose, experienceData }: ExperienceProps) {
  return (
    <S.styledModal
      className="styledModal"
      title={`${experienceData.company} - Experience.txt`}
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={onClose} key="close" />,
      ]}
      icon={<Shell3236 variant="16x16_4" />}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <h2>{experienceData.role}</h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Date variant="16x16_4" />
          <span>{experienceData.startDate}</span>
          {!!experienceData.endDate && '-'}
          <span>{experienceData.endDate}</span>
        </div>

        <h3>
          {'Role and impact at '}
          {experienceData.company}
        </h3>

        <p>{experienceData.description}</p>

        <hr style={{ width: '100%', borderColor: 'gray' }} />

        <h3>
          {'Key Responsibilities at '}
          {experienceData.company}
        </h3>

        <ul
          style={{
            listStyleType: 'disc',
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {experienceData.keyResponsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </S.styledModalFrame>
    </S.styledModal>
  )
}

export default Experience
