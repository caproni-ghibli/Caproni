import React from 'react'
import { TitleBar, List } from '@react95/core'
import * as S from './layout-styling'
import { FolderFile } from '@react95/icons'
import PAST_ROLES from '@/data/experience'
import ExperienceShortcuts from './experience-icons'

interface WorkProps {
  closeWork: boolean | (() => boolean | void)
  experiences: ModalControls[]
}

type ModalControls = [boolean, () => void, () => void]

function Work({ closeWork, experiences }: WorkProps) {
  const handleClose = () => {
    return typeof closeWork === 'function' ? closeWork() : false
  }

  return (
    <S.styledModal
      title="Work History"
      titleBarOptions={[
        <S.styledModal.Minimize key="minimize" />,
        <TitleBar.Close onClick={handleClose} key="close" />,
      ]}
      height="100%"
      width="600px"
      icon={<FolderFile variant="16x16_4" />}
      menu={[
        {
          name: 'File',
          list: (
            <List width="200px">
              <List.Item onClick={handleClose}>Exit</List.Item>
            </List>
          ),
        },
        {
          name: 'Edit',
          list: (
            <List width="200px">
              <List.Item>Copy</List.Item>
            </List>
          ),
        },
      ]}
    >
      <S.styledModalFrame bg="white" boxShadow="$in">
        <ExperienceShortcuts experiences={experiences} />
      </S.styledModalFrame>
    </S.styledModal>
  )
}

export default Work
