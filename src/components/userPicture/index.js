import React from 'react'
import { PictureContainer, Picture } from './UserPictureElements'

function UserPicture({type, imageSrc}) {
  return (
    <PictureContainer type={type}>
        <Picture src={imageSrc}/>
    </PictureContainer>
  )
}

export default UserPicture
