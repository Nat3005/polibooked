import {React,useRef,useState} from 'react'
import { ModalContainer, ModalOverlay, TitleContainer, HeadlineContainer, BreadcrumbsContainer, SubmitButtons } from './ModalElements';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import TextInput from '../textInput';
import RadioInput from '../radioInput';
import { PrimaryButton,TertiaryButton } from '../buttons/ButtonElements';
import { UserAuth } from '../../context/UserContext';


function Modal({showModal, setShowModal,announcementType}) {

    if(!showModal) return null;

    const {user} = UserAuth();

    const formItem =  useRef({});

    const handleSubmit = (event) => {
        event.preventDefault();

        if(formItem.current.title.value !== "" &&
            formItem.current.description.value !== "" &&
            formItem.current.tags.value !== ""){

            const separatedTags = formItem.current.tags.value.split(',').map(s => s.trim());

            const newPost = {
                uid: user.uid,
                type: announcementType,
                title: formItem.current.title.value,
                description: formItem.current.description.value,
                price:formItem.current.price,
                tags: separatedTags
            };
            console.log({newPost});
        }
    }

    return (
    <ModalOverlay>
        <ModalContainer>
            <HeadlineContainer>
                <TitleContainer>
                <SchoolRoundedIcon/>
                Zostań korepetytorem
                </TitleContainer>
                <CloseRoundedIcon style={{cursor:'pointer'}} onClick={()=>setShowModal(!showModal)}/>
            </HeadlineContainer>
            <BreadcrumbsContainer>Publikujesz ogłoszenie w W4 <ChevronRightRoundedIcon />Informatyka Techniczna</BreadcrumbsContainer>
            <TextInput  refs={ref => formItem.current.title = ref} label="Tytuł Ogłoszenia*" type="text" name="title" placeholder={"np.: Poznaj tajnijki Logiki Układów Cyfrowych"} />
            <TextInput refs={ref => formItem.current.description = ref} label="Opis*" type="textarea" name="description" wrap="soft" placeholder={"np.: Od wielu lat zajmuje się programowaniem niskopoziomowym, dlatego pisanie programów w Assemblerze przychodzi mi z łatwością. Podczas zajęć pomogę Ci zrozumieć podstawy działania rejestrów oraz pokarzę w jaki sposób pisać i debugować programy. "} />
            <RadioInput refs={ref => formItem.current.price = ref} label="Cena*"></RadioInput>
            <TextInput  refs={ref => formItem.current.tags = ref} label="Tagi*" type="text" name="tags" placeholder={"np.: JavaScript, React.js, Programowanie Interfejsów Mobilnych"} />
            <SubmitButtons onSubmit={handleSubmit}>
                <TertiaryButton variant="dark" onClick={()=>setShowModal(!showModal)}>Anuluj</TertiaryButton>
                <PrimaryButton variant="purpleAccent">Dodaj ogłoszenie</PrimaryButton>
            </SubmitButtons>
        </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal;
