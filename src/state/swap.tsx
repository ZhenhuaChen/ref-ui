import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Pool } from '../services/pool';
import { TokenMetadata } from '../services/ft-contract';
import { percentLess } from '../utils/numbers';
import { checkTransaction, estimateSwap, swap } from '../services/swap';
import { useHistory, useLocation } from 'react-router';
import getConfig from '~services/config';
import { FormattedMessage, useIntl } from 'react-intl';

const ONLY_ZEROS = /^0*\.?0*$/;

interface SwapOptions {
  tokenIn: TokenMetadata;
  tokenInAmount: string;
  tokenOut: TokenMetadata;
  slippageTolerance: number;
}

export const useSwap = ({
  tokenIn,
  tokenInAmount,
  tokenOut,
  slippageTolerance,
}: SwapOptions) => {
  const [pool, setPool] = useState<Pool>();
  const [canSwap, setCanSwap] = useState<boolean>();
  const [tokenOutAmount, setTokenOutAmount] = useState<string>('');
  const [swapError, setSwapError] = useState<Error>();

  const { search } = useLocation();
  const history = useHistory();
  const txHash = new URLSearchParams(search).get('transactionHashes');

  const minAmountOut = tokenOutAmount
    ? percentLess(slippageTolerance, tokenOutAmount)
    : null;

  const intl = useIntl();

  useEffect(() => {
    if (txHash) {
      checkTransaction(txHash)
        .then(({ transaction }) => {
          return (
            transaction?.actions[1]?.['FunctionCall']?.method_name ===
              'ft_transfer_call' ||
            transaction?.actions[0]?.['FunctionCall']?.method_name === 'swap' ||
            transaction?.actions[0]?.['FunctionCall']?.method_name ===
              'near_withdraw'
          );
        })
        .then((isSwap) => {
          if (isSwap) {
            toast(
              <a
                className="text-primary font-semibold"
                href={`${getConfig().explorerUrl}/transactions/${txHash}`}
                target="_blank"
              >
                <FormattedMessage
                  id="swap_successful_click_to_view"
                  defaultMessage="Swap successful. Click to view"
                />
              </a>,
              {
                autoClose: 8000,
                closeOnClick: false,
              }
            );
          }
          history.replace('');
        });
    }
  }, [txHash]);

  useEffect(() => {
    setCanSwap(false);
    if (
      tokenIn &&
      tokenOut &&
      tokenInAmount &&
      !ONLY_ZEROS.test(tokenInAmount) &&
      tokenIn.id !== tokenOut.id
    ) {
      setSwapError(null);
      estimateSwap({
        tokenIn,
        tokenOut,
        amountIn: tokenInAmount,
        intl,
      })
        .then(({ estimate, pool }) => {
          if (!estimate || !pool) throw '';
          setCanSwap(true);
          setTokenOutAmount(estimate);
          setPool(pool);
        })
        .catch((err) => {
          setCanSwap(false);
          setTokenOutAmount('');
          setSwapError(err);
        });
    } else if (
      tokenIn &&
      tokenOut &&
      !tokenInAmount &&
      ONLY_ZEROS.test(tokenInAmount) &&
      tokenIn.id !== tokenOut.id
    ) {
      setTokenOutAmount('0');
    }
  }, [tokenIn, tokenOut, tokenInAmount]);

  const makeSwap = () => {
    swap({
      pool,
      tokenIn,
      amountIn: tokenInAmount,
      tokenOut,
      minAmountOut,
    }).catch(setSwapError);
  };

  return {
    canSwap,
    tokenOutAmount,
    minAmountOut,
    pool,
    swapError,
    makeSwap,
  };
};
