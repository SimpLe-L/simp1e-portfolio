"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectBtn = () => {
  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted
          const connected =
            ready &&
            account &&
            chain
          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button onClick={openConnectModal} type="button" className="min-w-[148px] h-[40px] px-4 rounded-[16px] bg-[--button-bg] text-[--basic-text] flex justify-center items-center font-bold cursor-pointer">
                      Connect
                    </button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="flex gap-3 bg-[--button-bg] p-4 rounded-[16px] text-[--basic-text]">

                    <button onClick={openAccountModal} type="button">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </>
  )
}

export default ConnectBtn;