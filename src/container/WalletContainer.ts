import { useEffect, useRef, useState } from 'react';
import { createContainer } from 'unstated-next';
import { REF_FARM_CONTRACT_ID } from '~services/near';

function useWalletInit() {
  const timer = useRef<NodeJS.Timeout>(null);
  const [accountId, setAccountId] = useState<string>();
  const [walletState, setWalletState] = useState<any>();
  useEffect(() => {
    timer.current = setTimeout(() => {
      if (window.wallet) {
        window.wallet
          .init({ contractId: REF_FARM_CONTRACT_ID })
          .then((res: any) => {
              console.log('初始化')
              console.log(res)
            window.walletAccount = window.wallet;
            window.accountId = window.wallet.getAccountId();
            setAccountId(window.wallet.getAccountId());
            setWalletState(res);
          });
      }
    }, 1000);

    return () => {
      timer.current = null;
    };
  }, []);
  return {accountId,walletState}
}

const WalletContainer = createContainer(useWalletInit);
export default WalletContainer;