

import { nftAddress } from "@/configs/adresses";
import { useToast } from "@/hooks/use-toast";
import { useReadContract, useWriteContract, type BaseError } from "wagmi";
import { nftMarketABI } from "@/abis/nftMarket";
import MarketCard from './MarketCard';
import { wagmiConfig } from "@/configs/wagmiConfig";
import { waitForTransactionReceipt } from '@wagmi/core';
// import Loader from "../crowdfunding/components/Loader";
import { useState } from 'react';

const NftMarket = ({ address }: { address: `0x${string}` | undefined }) => {

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  // buy
  const { writeContract: buyMethod, isPending: buyStatus } = useWriteContract({
    mutation: {
      onSuccess: async (hash, variables) => {
        const listReceipt = await waitForTransactionReceipt(wagmiConfig,
          { hash });
        if (listReceipt.status === "success") {
          setIsLoading(false);
          toast({
            description: "购买成功！",
          });
          refetch();
        }
      },
      onError: (error) => {
        toast({
          description: "Error: " + ((error as BaseError).shortMessage || error.message)
        });
      }
    }
  });
  // 下架
  const { writeContract: unList, isPending: unListStatus } = useWriteContract({
    mutation: {
      onSuccess: async (hash, variables) => {
        const listReceipt = await waitForTransactionReceipt(wagmiConfig,
          { hash });
        if (listReceipt.status === "success") {
          setIsLoading(false);
          toast({
            description: "下架成功！",
          });
          refetch();
        }
      },
      onError: (error) => {
        toast({
          description: "Error: " + ((error as BaseError).shortMessage || error.message)
        });
      }
    }
  })
  // 读取上架的nft列表
  const { data: NftList, refetch } = useReadContract({
    // 合约地址
    address: nftAddress,
    abi: nftMarketABI,
    functionName: 'allMarkets'
  })
  // 购买nft
  const buyNft = async (tokenId: bigint, price: bigint) => {
    setIsLoading(true);
    buyMethod({
      abi: nftMarketABI,
      address: nftAddress,
      functionName: 'buy',
      args: [tokenId],
      value: price
    });
  }
  // 下架nft
  const unShelve = async (tokenId: bigint) => {
    setIsLoading(true);
    unList({
      abi: nftMarketABI,
      address: nftAddress,
      functionName: 'unShelve',
      args: [tokenId]
    })
  }

  return (
    <div className='w-full h-full overflow-y-auto flex flex-wrap gap-5'>
      {/* {
        isLoading && <Loader />
      } */}
      {NftList && NftList.map(item => {
        return <MarketCard key={item.tokenId} nftItem={item} address={address} buyNft={buyNft} unShelve={unShelve} />
      })}
    </div>
  )
}

export default NftMarket