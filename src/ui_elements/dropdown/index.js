import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { PrimaryButton } from '../buttons/ButtonElements';
import { DropdownContainer } from './DropdownElements';

function Drowpdown({
  type,
  showDropdown,
  setShowDropdown,
  showTutoringModal,
  setShowTutoringModal,
  showStudentModal,
  setShowStudentModal,
}) {
  if (!showDropdown) return null;

  const openTutoringModal = () => {
    setShowTutoringModal(!showTutoringModal);
    setShowDropdown(!showDropdown);
  };

  const openStudentModal = () => {
    setShowStudentModal(!showStudentModal);
    setShowDropdown(!showDropdown);
  };

  if (type.includes('modalDropdown')) {
    return (
      <DropdownContainer>
        <CloseRoundedIcon
          style={{ cursor: 'pointer', alignSelf: 'flex-end' }}
          onClick={() => setShowDropdown(!showDropdown)}
        />
        <PrimaryButton
          size="big"
          onClick={openTutoringModal}
          variant="purpleAccent"
        >
          {' '}
          <SchoolRoundedIcon />
          Zostań korepetytorem{' '}
        </PrimaryButton>
        <PrimaryButton
          size="big"
          onClick={openStudentModal}
          variant="yellowAccent"
        >
          {' '}
          <EmojiPeopleRoundedIcon />
          Znajdź korepetytora{' '}
        </PrimaryButton>
      </DropdownContainer>
    );
  }
}

export default Drowpdown;
