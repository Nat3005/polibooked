import { React, useRef, useState } from 'react';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import { matchPath, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import {
  ModalContainer,
  ModalOverlay,
  TitleContainer,
  HeadlineContainer,
  BreadcrumbsContainer,
  SubmitButtons,
} from './ModalElements';
import TextInput from '../../ui_elements/textInput';
import RadioInput from '../../ui_elements/radioInput';
import {
  PrimaryButton,
  TertiaryButton,
} from '../../ui_elements/buttons/ButtonElements';
import modalData from './modalData';
import {
  addAnnouncement,
  editAnnouncement,
} from '../../firebase/announcementService';
import BreadcrumbsBar from '../breadcrumbs';
import { SmallText } from '../../ui_elements/text/TextElements';
import ErrorMessage from '../../ui_elements/errorMessage';

function Modal({ showModal, setShowModal, announcementType, announcement }) {
  const [validationErrors, setValidationErrors] = useState([]);
  const formItem = useRef({});
  const { pathname } = useLocation();
  const { params: urlParams } =
    matchPath(':source/:abbreviation/:major', pathname) ?? {};

  if (!showModal) return null;

  const placeholderData = modalData[announcementType];

  const writeToFirestore = (newAnnouncement) => {
    if (announcementType.includes('Edit')) {
      editAnnouncement(newAnnouncement).then((result) =>
        console.warn(`I should be a tołst: ${result}`)
      );
    } else {
      addAnnouncement(newAnnouncement).then((result) =>
        console.warn(`I should be a toast: ${result}`)
      );
    }
    formItem.current.title.value = '';
    formItem.current.description.value = '';
    formItem.current.tags.value = '';
    setValidationErrors([]);
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const separatedTags = formItem.current.tags.value
      .split(',')
      .map((s) => s.trim())
      .filter((s) => !!s);

    const newAnnouncement = {
      type: announcementType.includes('tutor') ? 'tutor' : 'student',
      title: formItem.current.title.value.trim(),
      description: formItem.current.description.value.trim(),
      price: formItem.current.price,
      tags: separatedTags,
      abbreviation: announcementType.includes('Edit')
        ? announcement.abbreviation
        : urlParams.abbreviation,
      major: announcementType.includes('Edit')
        ? announcement.major
        : urlParams.major,
      ...(!!announcement && { id: announcement.id }),
    };

    const schema = yup.object().shape({
      title: yup.string().required('Tytuł nie może być pusty'),
      description: yup.string().required('Opis nie może być pusty'),
      tags: yup.array().min(1, 'Wprowadź przynajmniej jeden tag'),
    });

    schema
      .validate(newAnnouncement, { abortEarly: false })
      .then(() => writeToFirestore(newAnnouncement))
      .catch((err) => {
        setValidationErrors(err.errors);
      });
  };

  const validationErrorsHTML = validationErrors?.map((it) => (
    <ErrorMessage key={it} message={it} />
  ));

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
        <BreadcrumbsContainer variant={announcementType}>
          {announcementType.includes('Edit') ? (
            <SmallText>Edytujesz ogłoszenie opublikowane w </SmallText>
          ) : (
            <SmallText>Publikujesz ogłoszenie w </SmallText>
          )}
          {announcementType.includes('Edit') ? (
            <BreadcrumbsBar
              variant="disabled"
              abbreviation={announcement.abbreviation}
              major={announcement.major}
            />
          ) : (
            <BreadcrumbsBar
              variant="disabled"
              abbreviation={urlParams.abbreviation}
              major={urlParams.major}
            />
          )}
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
              {announcementType.includes('Edit')
                ? 'Edytuj ogłoszenie'
                : 'Dodaj ogłoszenie'}
            </PrimaryButton>
          ) : (
            <PrimaryButton size="big" variant="yellowAccent">
              {announcementType.includes('Edit')
                ? 'Edytuj ogłoszenie'
                : 'Dodaj ogłoszenie'}
            </PrimaryButton>
          )}
        </SubmitButtons>
        <div>{validationErrorsHTML}</div>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;
