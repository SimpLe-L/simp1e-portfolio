import AsideComponent from "@/components/aside-comp";
import ConnectBtn from "@/components/connect-btn";

const menuList = [
  {
    menuName: "web3展板",
    list: [
      {
        title: "NFT",
        path: "/dapps",
      },
      {
        title: "Crypto Dashboard",
        path: "/dapps/crypto",
      },
      {
        title: "Swap Demo",
        path: "/dapps/swap",
      },
      {
        title: "Carbon Miner",
        path: "/dapps/hackthon"
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
    <div className="h-screen flex flex-col">
      <div className="h-24 flex px-6 justify-between items-center border-b border-[--split-line]">
        <div className="">返回</div>
        <ConnectBtn />
      </div>
      <main className="flex-1 grid grid-cols-5">
        <div className="col-span-1">
          <AsideComponent menuList={menuList} />
        </div>
        <div className="col-span-4">
          {children}
        </div>
      </main>

    </div>
  )
}

export default DappsLayout;