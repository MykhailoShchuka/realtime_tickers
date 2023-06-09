export interface Ticker {
  ticker: string,
  exchange: string,
  price: string,
  change: string,
  change_percent: string,
  dividend: string,
  yield: string,
  last_trade_time: string,
}

export type Tickers = Array<Ticker>;
