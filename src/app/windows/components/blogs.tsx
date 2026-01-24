import React from 'react'
import { TitleBar, List } from '@react95/core'
import { FolderFile } from '@react95/icons'
import * as S from './layout-styling'

interface BlogsProps {
  closeBlogs: boolean | (() => boolean | void)
}

function Blogs({ closeBlogs }: BlogsProps) {
  const handleClose = () => {
    return typeof closeBlogs === 'function' ? closeBlogs() : false
  }

  return (
    <S.styledModal
      title="Blogs"
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
        <h2>Blogs are coming soon...</h2>
      </S.styledModalFrame>
    </S.styledModal>
  )
}

export default Blogs
