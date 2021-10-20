import React from 'react';
import SwapCard from '~components/swap/SwapCard';
import Loading from '~components/layout/Loading';
import { useWhitelistTokens } from '../state/token';
import { FormattedMessage } from 'react-intl';

function SwapPage() {
  const allTokens = useWhitelistTokens();
  if (!allTokens) return <Loading />;

  return (
    <div className="swap">
      <section className="xl:w-1/3 2xl:w-1/3 3xl:w-1/4 lg:w-1/2 md:w-5/6 xs:w-11/12 m-auto">
        <SwapCard allTokens={allTokens} />
      </section>
    </div>
  );
}

export default SwapPage;
