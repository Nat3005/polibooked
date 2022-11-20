import { React, useRef } from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import { matchPath, useLocation } from 'react-router-dom';
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
import modalData from './modalData';
import {
  addAnnouncement,
  editAnnouncement,
} from '../../firebase/announcementService';
import BreadcrumbsBar from '../breadcrumbs';
import { SmallText } from '../text/TextElements';

function Modal({ showModal, setShowModal, announcementType, announcement }) {
  const formItem = useRef({});
  const { pathname } = useLocation();
  const { params: urlParams } =
    matchPath(':dupa/:abbreviation/:major', pathname) ?? {};

  if (!showModal) return null;

  const placeholderData = modalData[announcementType];

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
        type: announcementType.includes('tutor') ? 'tutor' : 'student',
        title: formItem.current.title.value,
        description: formItem.current.description.value,
        price: formItem.current.price,
        tags: separatedTags,
        abbreviation: urlParams.abbreviation,
        major: urlParams.major,
        ...(!!announcement && { id: announcement.id }),
      };

      if (announcementType.includes('Edit')) {
        editAnnouncement(newPost).then((result) =>
          console.warn(`I should be a tołst: ${result}`)
        );
      } else {
        addAnnouncement(newPost).then((result) =>
          console.warn(`I should be a toast: ${result}`)
        );
      }
      formItem.current.title.value = '';
      formItem.current.description.value = '';
      formItem.current.tags.value = '';
      setShowModal(false);
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
          <SmallText>Publikujesz ogłoszenie w </SmallText>{' '}
          <BreadcrumbsBar variant="disabled" />
        </BreadcrumbsContainer>
        <TextInput
          variant={announcementType}
          refs={(ref) => {
            formItem.current.title = ref;
          }}
          label="Tytuł Ogłoszenia*"
          type="text"
          name="title"
          value={announcement?.title}
          placeholder={placeholderData.titlePlaceholder}
        />
        <TextInput
          variant={announcementType}
          refs={(ref) => {
            formItem.current.description = ref;
          }}
          label="Opis*"
          type="textarea"
          name="description"
          wrap="soft"
          value={announcement?.description}
          placeholder={placeholderData.descriptionPlaceholder}
        />
        <RadioInput
          variant={announcementType}
          refs={(ref) => {
            formItem.current.price = ref;
          }}
          label="Cena*"
          placeholder={placeholderData.pricePlaceholder}
        />
        <TextInput
          variant={announcementType}
          refs={(ref) => {
            formItem.current.tags = ref;
          }}
          label="Tagi*"
          type="text"
          name="tags"
          value={announcement?.tags}
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
            <PrimaryButton size="big" variant="purpleAccent">
              Dodaj ogłoszenie
            </PrimaryButton>
          ) : (
            <PrimaryButton size="big" variant="yellowAccent">
              Dodaj ogłoszenie
            </PrimaryButton>
          )}
        </SubmitButtons>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;
