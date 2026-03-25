"use client";

import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConfigurator } from "../contexts/Configurator";
import { traits } from "@/lib/new_traits";

export const ButtonInterface = () => {
  const {
    //legs,
    //toggleLegs,
    setSelectedClothesOption,
    setSelectedEarsOption,
    setSelectedEyesOption,
    setSelectedHatOption,
    setSelectedMouthOption,
    setSelectedTypeOption,
    setSelectedBGOption,
  } = useConfigurator();

  const handleChange = () => {

  };

  const getSortedTraitValues = (traitValues: readonly string[]) => {
    return [...traitValues].sort((a, b) => a.localeCompare(b));
  };

  const renderTraitItems = (traitValues: readonly string[]) => {
    return getSortedTraitValues(traitValues).map((value) => (
      <SelectItem key={value} value={value}>
        {value}
      </SelectItem>
    ));
  };

  const [number, setNumber] = useState<string>('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedNumber = number.trim();
    if (!trimmedNumber) return;
    router.push(`/gen2/${trimmedNumber}`);
  };

    return (
<div>
    {/* <Card className="hidden lg:block absolute bottom-0 right-0 "> */}
    <Card className="">
    {/* <Card className="w-[350px]"> */}
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>Select or design your SMB Gen2.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Monke #</Label>
              <Input id="name" placeholder="4496" value={number} onChange={handleInputChange}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Clothes</Label>
              <Select onValueChange={setSelectedClothesOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-72  rounded-md border">
                      {renderTraitItems(traits.Clothes)}
                    </ScrollArea>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Ears</Label>
              <Select onValueChange={setSelectedEarsOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-38  rounded-md border">
                      {renderTraitItems(traits.Ears)}
                    </ScrollArea>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Eyes</Label>
              <Select onValueChange={setSelectedEyesOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-72  rounded-md border">
                      {renderTraitItems(traits.Eyes)}
                    </ScrollArea>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Hat</Label>
              <Select onValueChange={setSelectedHatOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-72  rounded-md border">
                      {renderTraitItems(traits.Hat)}
                    </ScrollArea>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Mouth</Label>
              <Select onValueChange={setSelectedMouthOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-42 rounded-md border">
                      {renderTraitItems(traits.Mouth)}
                    </ScrollArea>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Type</Label>
              <Select onValueChange={setSelectedTypeOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-74  rounded-md border">
                      {renderTraitItems(traits.Type)}
                    </ScrollArea>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Background</Label>
              <Select onValueChange={setSelectedBGOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-42 rounded-md border">
                      {renderTraitItems(traits.Background)}
                    </ScrollArea>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button onClick={handleChange}>Generate</Button>
      </CardFooter>
    </Card>
</div>
  );
};

export default ButtonInterface;
