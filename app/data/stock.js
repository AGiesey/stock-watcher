export class Stock {
  name;
  symbol;
  changeDirection;
  changeAmmount;
  currentPrice;
  openPrice;
  highPrice;
  lowPrice;

  constructor(name, symbol, changeDirection, changeAmmount, currentPrice, openPrice, highPrice, lowPrice){
    super()
    this.name = name;
    this.symbol = symbol;
    this.changeDirection = changeDirection;
    this.changeAmmount = changeAmmount;
    this.currentPrice = currentPrice;
    this.highPrice = highPrice;
    this.lowPrice = lowPrice;
  }
}