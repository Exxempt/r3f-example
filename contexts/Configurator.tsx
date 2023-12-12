"use client"

import { createContext, useContext, useState, FC, PropsWithChildren, Dispatch, SetStateAction } from "react";

interface ConfiguratorContext {
    legs: string;
    toggleLegs?: () => void;
    selectedClothesOption: string;
    selectedEarsOption: string;
    selectedEyesOption: string;
    selectedHatOption: string;
    selectedTypeOption: string;
    selectedMouthOption: string;
    selectedBGOption: string;
    setSelectedClothesOption: Dispatch<SetStateAction<string>>;
    setSelectedEarsOption: Dispatch<SetStateAction<string>>;
    setSelectedEyesOption: Dispatch<SetStateAction<string>>;
    setSelectedHatOption: Dispatch<SetStateAction<string>>;
    setSelectedMouthOption: Dispatch<SetStateAction<string>>;
    setSelectedTypeOption: Dispatch<SetStateAction<string>>;
    setSelectedBGOption: Dispatch<SetStateAction<string>>;
}

const defaultConfigurator = {
    legs: "0",
    selectedClothesOption: "None",
    selectedEarsOption: "None",
    selectedEyesOption: "None",
    selectedHatOption: "None",
    selectedTypeOption: "Alien",
    selectedMouthOption: "None",
    selectedBGOption: "None",
    setSelectedClothesOption: () => {}, 
    setSelectedEarsOption: () => {}, 
    setSelectedEyesOption: () => {}, 
    setSelectedHatOption: () => {}, 
    setSelectedMouthOption: () => {}, 
    setSelectedTypeOption: () => {}, 
    setSelectedBGOption: () => {}, 
}

const ConfiguratorContext = createContext<ConfiguratorContext>(defaultConfigurator);

export const ConfiguratorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [legs, setLegs] = useState(defaultConfigurator.legs);
  const [selectedClothesOption, setSelectedClothesOption] = useState<string>(defaultConfigurator.selectedClothesOption);
  const [selectedEarsOption, setSelectedEarsOption] = useState<string>(defaultConfigurator.selectedEarsOption);
  const [selectedEyesOption, setSelectedEyesOption] = useState<string>(defaultConfigurator.selectedEyesOption);
  const [selectedHatOption, setSelectedHatOption] = useState<string>(defaultConfigurator.selectedHatOption);
  const [selectedMouthOption, setSelectedMouthOption] = useState<string>(defaultConfigurator.selectedMouthOption);
  const [selectedTypeOption, setSelectedTypeOption] = useState<string>(defaultConfigurator.selectedTypeOption);
  const [selectedBGOption, setSelectedBGOption] = useState<string>(defaultConfigurator.selectedBGOption);

  const toggleLegs = () => {
    setLegs(legs);
  }

  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        toggleLegs,
        selectedClothesOption,
        selectedEarsOption,
        selectedEyesOption,
        selectedHatOption,
        selectedTypeOption,
        selectedMouthOption,
        selectedBGOption,
        setSelectedClothesOption,
        setSelectedEarsOption,
        setSelectedEyesOption,
        setSelectedHatOption,
        setSelectedMouthOption,
        setSelectedTypeOption,
        setSelectedBGOption,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};