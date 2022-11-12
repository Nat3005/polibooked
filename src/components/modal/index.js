import { React, useRef, useState } from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import {
  ModalContainer,
  ModalOverlay,
  TitleContainer,
  HeadlineContainer,
  BreadcrumbsContainer,
  SubmitButtons,
} from './ModalElements';
import TextInput from '../textInput';
import RadioInput from '../radioInput';
import { PrimaryButton, TertiaryButton } from '../buttons/ButtonElements';
import { UserAuth } from '../../context/UserContext';
import modalData from './modalData';
import { addAnnouncement } from '../../firebase/announcementService';

function Modal({ showModal, setShowModal, announcementType }) {
  let placeholderData;
  if (announcementType.includes('tutor')) {
    placeholderData = modalData[0];
  } else {
    placeholderData = modalData[1];
  }

  if (!showModal) return null;

  const { user } = UserAuth();

  const formItem = useRef({});

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formItem.current.title.value !== '' &&
      formItem.current.description.value !== '' &&
      formItem.current.tags.value !== ''
    ) {
      const separatedTags = formItem.current.tags.value
        .split(',')
        .map((s) => s.trim());

      const newPost = {
        uid: user.uid,
        type: announcementType,
        title: formItem.current.title.value,
        description: formItem.current.description.value,
        price: formItem.current.price,
        tags: separatedTags,
      };

      addAnnouncement(newPost).then((result) =>
        console.log('I should be a toast')
      );
      formItem.current.title.value = '';
      formItem.current.description.value = '';
      formItem.current.tags.value = '';
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <HeadlineContainer>
          <TitleContainer variant={announcementType}>
            {announcementType.includes('tutor') ? (
              <SchoolRoundedIcon />
            ) : (
              <EmojiPeopleRoundedIcon />
            )}
            {placeholderData.modalTitle}
          </TitleContainer>
          <CloseRoundedIcon
            style={{ cursor: 'pointer' }}
            onClick={() => setShowModal(!showModal)}
          />
        </HeadlineContainer>
        <BreadcrumbsContainer>
          Publikujesz ogłoszenie w W4 <ChevronRightRoundedIcon />
          Informatyka Techniczna
        </BreadcrumbsContainer>
        <TextInput
          variant={announcementType}
          refs={(ref) => (formItem.current.title = ref)}
          label="Tytuł Ogłoszenia*"
          type="text"
          name="title"
          placeholder={placeholderData.titlePlaceholder}
        />
        <TextInput
          variant={announcementType}
          refs={(ref) => (formItem.current.description = ref)}
          label="Opis*"
          type="textarea"
          name="description"
          wrap="soft"
          placeholder={placeholderData.descriptionPlaceholder}
        />
        <RadioInput
          variant={announcementType}
          refs={(ref) => (formItem.current.price = ref)}
          label="Cena*"
          placeholder={placeholderData.pricePlaceholder}
        />
        <TextInput
          variant={announcementType}
          refs={(ref) => (formItem.current.tags = ref)}
          label="Tagi*"
          type="text"
          name="tags"
          placeholder={placeholderData.tagsPlaceholder}
        />
        <SubmitButtons onSubmit={handleSubmit}>
          <TertiaryButton
            variant="dark"
            onClick={() => setShowModal(!showModal)}
          >
            Anuluj
          </TertiaryButton>
          {announcementType.includes('tutor') ? (
            <PrimaryButton variant="purpleAccent">
              Dodaj ogłoszenie
            </PrimaryButton>
          ) : (
            <PrimaryButton variant="yellowAccent">
              Dodaj ogłoszenie
            </PrimaryButton>
          )}
        </SubmitButtons>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;
