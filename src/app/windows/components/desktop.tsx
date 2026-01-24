'use client'
import React from 'react'
import { List, Frame, Cursor, TaskBar, TitleBar } from '@react95/core'
import zack_pixelated from '../public/zack_pixelated.png'
import Shortcuts from './desktop-icons'
import * as S from './layout-styling'
import styles from './styles.module.scss'
import {
  Shell3236,
  Shell3228,
  User,
  Shell3234,
  Progman34,
  Awfxcg321303,
  FolderFile,
} from '@react95/icons'
import Blogs from './blogs'
import Skills from './skills'
import useModal from './useModal'
import Work from './work'
import PAST_ROLES from '@/data/experience'
import Experience from './experience'

type ModalControls = [boolean, () => void, () => void]

function Desktop() {
  const [showSkillsModal, handleOpenSkillsModal, handleCloseSkillsModal] =
    useModal(false) as ModalControls
  const [showPhotoModal, handleOpenPhotoModal, handleClosePhotoModal] =
    useModal(false) as ModalControls
  const [showBlogsModal, handleOpenBlogsModal, handleCloseBlogsModal] =
    useModal(false) as ModalControls
  const [showWorkModal, handleOpenWorkModal, handleCloseWorkModal] = useModal(
    false,
  ) as ModalControls

  const [openExperienceIndexes, setOpenExperienceIndexes] = React.useState<
    Set<number>
  >(new Set())

  const experienceModalControls = PAST_ROLES.map((_, index) => {
    return [
      false,
      () => openExperience(index),
      () => closeExperience(index),
    ] as ModalControls
  })

  const openExperience = (index: number) => {
    setOpenExperienceIndexes((prev) => new Set(prev).add(index))
  }

  const closeExperience = (index: number) => {
    setOpenExperienceIndexes((prev) => {
      const next = new Set(prev)
      next.delete(index)
      return next
    })
  }

  const socialMedia = [
    {
      id: 0,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zakariabj/',
    },
    {
      id: 1,
      name: 'Personal Github',
      url: 'https://www.github.com/zakariazuck/',
    },
    {
      id: 2,
      name: 'Work Github',
      url: 'https://www.github.com/zakariabenjaoued/',
    },
  ]

  return (
    <div className={styles.componentScope}>
      <TaskBar
        list={
          <List width={'200px'}>
            <List.Item
              className="listLink"
              icon={<Progman34 variant="32x32_4" />}
            >
              Socials
              <List>
                {socialMedia.map(({ id, name, url }) => (
                  <a className="listLink" target="_blank" href={url} key={id}>
                    <List.Item className={`${Cursor.Pointer} listLink`}>
                      {name}
                    </List.Item>
                  </a>
                ))}
              </List>
            </List.Item>
            <List.Item
              icon={<FolderFile variant="32x32_4" />}
              onClick={handleOpenBlogsModal}
              className="listLink"
            >
              Blogs{' '}
            </List.Item>
            <List.Item
              icon={<Shell3234 variant="32x32_4" />}
              onClick={handleOpenWorkModal}
              className="listLink"
            >
              Work History{' '}
            </List.Item>
            <List.Item
              icon={<User variant="32x32_4" />}
              onClick={handleOpenPhotoModal}
              className="listLink"
            >
              Zack{' '}
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<Shell3228 variant="32x32_4" />}
              onClick={() => (window.location.href = '/')}
              className="listLink"
            >
              Shut Down...
            </List.Item>
          </List>
        }
      />
      <Shortcuts
        openBlogs={handleOpenBlogsModal}
        openWork={handleOpenWorkModal}
      />
      {showPhotoModal && (
        <S.styledModal
          title={'zack_compressed_for_web.jpeg'}
          titleBarOptions={
            <TitleBar.Close onClick={handleClosePhotoModal} key="close" />
          }
          icon={<User variant="16x16_4" />}
        >
          <Frame boxShadow="none" className="fullWidthImage">
            <img
              src={zack_pixelated.src}
              aria-hidden
              alt="Zack as a pixelated image"
              className="fullWidthImage"
            ></img>
          </Frame>
        </S.styledModal>
      )}
      {showBlogsModal && <Blogs closeBlogs={handleCloseBlogsModal} />}
      {showWorkModal && (
        <Work
          closeWork={handleCloseWorkModal}
          experiences={experienceModalControls}
        />
      )}
      {PAST_ROLES.map((experienceData, index) =>
        openExperienceIndexes.has(index) ? (
          <Experience
            key={index}
            onClose={() => closeExperience(index)}
            experienceData={experienceData}
          />
        ) : null,
      )}
    </div>
  )
}

export default Desktop
