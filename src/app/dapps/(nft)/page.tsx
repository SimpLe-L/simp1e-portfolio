"use client"

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MintComp from './Mint'
import MarketComp from './Market'

const NftPage = () => {

  const { address } = useAccount();
  const [isMine, setIsMain] = useState(true);

  const changePlace = () => {
    setIsMain(!isMine);
  }

  const [tabDefault, setTabValue] = useState('mine');
  const changeTab = (value: string) => {
    setTabValue(value);
  };

  return (
    <Tabs
      value={tabDefault}
      onValueChange={changeTab}
      className="w-full h-full flex flex-col items-center py-3"
    >
      <TabsList
        className={"grid w-[140px] grid-cols-2 bg-[--card-bg]"}
      >
        <TabsTrigger value="mine">我的</TabsTrigger>
        <TabsTrigger value="market">市场</TabsTrigger>
      </TabsList>
      <TabsContent value="mine" className="w-full h-full px-5">
        <MintComp address={address} changePlace={changePlace} />
      </TabsContent>
      <TabsContent value="market" className="w-full h-full px-5">
        <MarketComp address={address} />
      </TabsContent>
    </Tabs>
  );
};

export default NftPage;
