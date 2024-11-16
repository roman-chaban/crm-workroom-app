"use client";

import { ChangeEvent, ForwardedRef, forwardRef, useState } from "react";

import { SingleValue } from "react-select";

import {
  HomeModalHeader,
  HomeModalIllustration,
  HomeModalFieldsForm,
  Container,
} from "@/components/index";

import { modal, modalContainer } from "@/classNames/home-modal/home-modal";

import { Option, SelectedValue } from "@/interfaces/select";

import { AreaValue } from "@/types/textarea";

interface HomeModalProps {
  onCloseModal: () => void;
}

export const HomeModal = forwardRef<HTMLDivElement, HomeModalProps>(
  ({ onCloseModal }, ref: ForwardedRef<HTMLDivElement>) => {
    const [selectedValue, setSelectedValue] =
      useState<SelectedValue>("Choose an option");
    const [areaDescription, setAreaDescription] = useState<AreaValue>("");

    const handleSelectChange = (selectValue: SingleValue<Option>) => {
      if (selectValue) {
        setSelectedValue(selectValue.label);
      }
    };

    const handleChangeAreaDescription = (
      event: ChangeEvent<HTMLTextAreaElement>,
    ) => {
      setAreaDescription(event.target.value);
    };

    return (
      <div className={modal}>
        <Container className={modalContainer} ref={ref}>
          <HomeModalHeader onCloseModal={onCloseModal} />
          <HomeModalIllustration />
          <HomeModalFieldsForm
            selectedValue={selectedValue}
            handleSelectChange={handleSelectChange}
            areaDescription={areaDescription}
            handleChangeAreaDescription={handleChangeAreaDescription}
          />
        </Container>
      </div>
    );
  },
);

HomeModal.displayName = "HomeModal";
