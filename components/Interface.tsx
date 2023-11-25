"use client";

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
import { traits } from "@/lib/traits";

export const Interface = () => {
  const {
    legs,
    toggleLegs,
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

  const getClothes = () => {
    return traits.filter((item) => item.trait_type == "Clothes");
  };
  const getEars = () => {
    return traits.filter((item) => item.trait_type == "Ears");
  };
  const getEyes = () => {
    return traits.filter((item) => item.trait_type == "Eyes");
  };
  const getHat = () => {
    return traits.filter((item) => item.trait_type == "Hat");
  };
  const getMouth = () => {
    return traits.filter((item) => item.trait_type == "Mouth");
  };
  const getType = () => {
    return traits.filter((item) => item.trait_type == "Type");
  };
  const getBG = () => {
    return traits.filter((item) => item.trait_type == "Background");
  };

  const populateClothes = () => {
    let item = getClothes();
    let sortedItem = item.sort((a, b) => a.value.localeCompare(b.value))

    let i = 0;
    return sortedItem.map((trait) => {
      i++;
      return (
        <SelectItem key={i} value={trait.value}>
          {trait.value}
        </SelectItem>
      );
    });
  };

  const populateEars = () => {
    let item = getEars();
    let sortedItem = item.sort((a, b) => a.value.localeCompare(b.value))
    let i = 0;
    return sortedItem.map((trait) => {
      i++;
      return (
        <SelectItem key={i} value={trait.value}>
          {trait.value}
        </SelectItem>
      );
    });
  };

  const populateEyes = () => {
    let item = getEyes();
    let sortedItem = item.sort((a, b) => a.value.localeCompare(b.value))
    let i = 0;
    return sortedItem.map((trait) => {
      i++;
      return (
        <SelectItem key={i} value={trait.value}>
          {trait.value}
        </SelectItem>
      );
    });
  };

  const populateHat = () => {
    let item = getHat();
    let sortedItem = item.sort((a, b) => a.value.localeCompare(b.value))
    let i = 0;
    return sortedItem.map((trait) => {
      i++;
      return (
        <SelectItem key={i} value={trait.value}>
          {trait.value}
        </SelectItem>
      );
    });
  };

  const populateMouth = () => {
    let item = getMouth();
    let sortedItem = item.sort((a, b) => a.value.localeCompare(b.value))
    let i = 0;
    return sortedItem.map((trait) => {
      i++;
      return (
        <SelectItem key={i} value={trait.value}>
          {trait.value}
        </SelectItem>
      );
    });
  };

  const populateType = () => {
    let item = getType();
    let sortedItem = item.sort((a, b) => a.value.localeCompare(b.value))
    let i = 0;
    return sortedItem.map((trait) => {
      i++;
      return (
        <SelectItem key={i} value={trait.value}>
          {trait.value}
        </SelectItem>
      );
    });
  };

  const populateBG = () => {
    let item = getBG();
    let sortedItem = item.sort((a, b) => a.value.localeCompare(b.value))
    let i = 0;
    return sortedItem.map((trait) => {
      i++;
      return (
        <SelectItem key={i} value={trait.value}>
          {trait.value}
        </SelectItem>
      );
    });
  };

    return (
<div>
    {/* <Card className="hidden lg:block absolute bottom-0 right-0 "> */}
    <Card className="hidden lg:block ">
    {/* <Card className="w-[350px]"> */}
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription>Select or design your SMB Gen2.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Monke #</Label>
              <Input id="name" placeholder="4496" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Clothes</Label>
              <Select onValueChange={setSelectedClothesOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    <ScrollArea className="h-72  rounded-md border">
                      {populateClothes()}
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
                      {populateEars()}
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
                      {populateEyes()}
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
                      {populateHat()}
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
                      {populateMouth()}
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
                      {populateType()}
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
                      {populateBG()}
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

export default Interface;
