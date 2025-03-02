import React from 'react';

const zh_CN = {
  deposit: '存入',
  Deposit: '存入',
  withdraw: '提取',
  Withdraw: '提取',
  withdraw_token: '提取代币',
  swap: '兑换',
  Swap: '兑换',
  exchange_tokens: '交换代币',
  pool: '流动池',
  Pool: '流动池',
  pools: '流动池',
  Pools: '流动池',
  no_tokens_deposited: '无代币存入',
  view_pools: '查看流动池',
  view_pool: '查看流动池',
  add_token: '添加代币',
  Add_Token: '添加代币',
  create_new_pool: '创建流动池',
  Create_New_Pool: '创建流动池',
  your_liquidity: '你的流动性',
  Your_Liquidity: '你的流动性',
  farms: '农场',
  Farms: '农场',
  airdrop: '空投',
  Airdrop: '空投',
  docs: '文档',
  Docs: '文档',
  community: '社区',
  Community: '社区',
  more: '更多',
  More: '更多',
  account: '账号',
  Account: '账号',
  move_assets_to_from_ethereum: '以太坊资产桥',
  rainbow_bridge: '以太坊资产桥',
  deposit_to_swap: '存入代币进行兑换',
  connect_to_near: '连接钱包',
  slippage: '滑点',
  minimum_received: '可收到的最低数额',
  swap_rate: '兑换汇率',
  pool_fee: '手续费',
  balance: '余额',
  from: '从',
  to: '到',
  sign_out: '退出',
  view_account: '查看账户',
  deposit_to_swap_and_add_liquidity: '存入代币兑换或增加流动性',
  small_storage_fee_is_applied_of: '存入手续费为',
  liquidity: '流动性',
  tokens: '代币',
  fee: '手续费',
  fees: '手续费',
  view_detail: '查看详情',
  pool_details: '资金池详情',
  liquidity_pools: '流动性资金池',
  minimum_tokens_out: '最少可获得代币数量',
  pair: '交易对',
  tvl: '总锁定价值',
  search_pools: '搜索资金池',
  add_liquidity: '添加流动性',
  remove_liquidity: '移除流动性',
  total_liquidity: '总流动性',
  coming_soon: '敬请期待',
  accumulated_volume: '累计成交量',
  underlying_liquidity: '基础流动性',
  total_shares: '份额总量',
  my_shares: '我的份额',
  token: '代币',
  enter_token_address: '输入代币地址',
  you_are_not_providing_liquidity_to_any_pools: '你未提供任何池子的流动性',
  remove: '移除',
  select_token: '选择代币',
  basis_points: '基点',
  total_fee: '总费用 %',
  protocol_fee_is: '协议费为 ',
  start_in: '开始',
  start_at: '开始于',
  started_at: '开始于',
  start_date: '开始时间',
  end_at: '结束于',
  end_date: '结束时间',
  earn: '赚取',
  ended: '已结束',
  pending: '未开始',
  rewards_per_week: '每周奖励总额',
  apr: '年化率',
  total_staked: '质押总金额',
  unclaimed_rewards: '未领取奖励',
  claim: '认领',
  claim_all: '认领全部',
  stake: '质押',
  unstake: '取消质押',
  your_rewards: '你的奖励',
  your_shares: '你的份额',
  shares_owned: '当前份额',
  stake_your_liquidity_provider_LP_tokens: '质押你的LP代币',
  go_to_wallet: '跳转到钱包',
  recent_activity: '近期操作',
  view_all: '查看全部',
  cancel: '取消',
  claim_ref_token: '认领 Ref 代币',
  has_no_available_claim: '无空投额度',
  sorry: '抱歉',
  total_ref_token: 'Ref代币总额度',
  locking_ref_token: 'Ref代币锁定额度',
  unclaim_ref_token: 'Ref代币未领取额度',
  unlocked: '已解锁',
  locking: '锁定中',
  you_can_claim_from: '你可以从如下时间开始认领',
  you_have_claimed_all_your_rewards: '你已经领取了你所有的奖励',
  ends_in: '结束于',
  days: '天后',
  swap_successful_click_to_view: '交易成功，点击查看详情',
  claim_successful_click_to_view: '认领成功，点击查看详情',
  claim_failed_click_to_view: '认领失败，点击查看详情',
  slippageCopyForMobile:
    '滑点是估计价格与成交价格之间的差额。您选择的百分比是当前汇率与执行交易时汇率之间的可接受差异。',
  slippageCopy:
    '滑点是估计价格与成交价格之间的差额。<br>您选择的百分比是当前汇率与执行交易时汇率之间<br>的可接受差异。',
  depositCopy: '将您选择的代币存入，以便进行兑换或添加到流动性池中。',
  nearDepositCopy: '将 Ⓝ 打包存入进行交换或添加到流动性池中',
  nearWithdrawCopy: '将您的 Ⓝ 取出后并将代币移到您的钱包中。',
  withdrawCopy: '取出您选择的代币，并将其存入您的钱包。',
  registerToken: '申请注册一个代币名单以外的新代币。',
  whitelistTokenCopy: '添加NEP-141代币。',
  addLiquidityPoolCopy:
    '为所选的两个代币对创建一个新的流动性池。<br>兑换手续费用是流动池从每笔交易中获得的百分比。',
  swapCopy:
    '兑换交易是将第一个选定的代币交换成第二个选定的代币。<br> 将使用最高流动性和最低交易费用的池。',
  addTokenCopy: '添加NEP-141代币。',
  getLPTokenCopy: '单击此处跳转到相应的池。',
  airdropCopy: '请在截止日期前至少领取一次空投，否则您的余额将捐给财政部。',
  farmRewardsCopy: '您已领取但尚未提取到您的NEAR钱包中的代币。',
  totalValueLockedCopy: '总锁定价值',
  you_do_not_have_enough: '你没有足够的',
  must_provide_at_least_one_token_for: '你提供的币的数量需大于0',
  is_not_exist: '不存在',
  must_input_a_value_greater_than_zero: '必须输入一个大于0的值',
  must_input_a_value_not_greater_than_your_balance:
    '输入的数值不能大于你的余额数量',
  no_pool_available_to_make_a_swap_from: '没有池子能够提供',
  for_the_amount: '数额为',
  no_pool_eng_for_chinese: '的交易',
  is_not_a_valid_swap_amount: '错误的兑换数额',
  not_nep_address:
    '您输入的地址不是NEP-141地址，请检查后再输入。如果是其他主网合约，去彩虹桥进行桥接处理',
  not_correct_address: '您输入的地址不正确，请检查后再输入',
};
export default zh_CN;
