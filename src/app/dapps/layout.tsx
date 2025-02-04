import AsideComponent from "@/components/aside-comp";

const menuList = [
  {
    menuName: "web3展板",
    list: [
      {
        title: "NFT",
        path: "/dapps/nft",
      },
      {
        title: "swap demo",
        path: "/dapps/swap",
      }
    ]
  }
]

const DappsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen grid grid-cols-4 pt-24">
      <div className="col-span-1">
        <AsideComponent menuList={menuList} />
      </div>
      <div className="col-span-3">
        {children}
      </div>
    </div>
  )
}

export default DappsLayout;