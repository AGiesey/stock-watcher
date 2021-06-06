import { View } from 'backbone.marionette';
import { StockCollection } from './StockCollection';
import { stocks } from '../data/stocks'
import template from '../templates/StockWatcherBody.jst';

//todo: add regions and child views
export const StockWatcherBody = View.extend({
  template: template,

  ui: {
    stockSearchInput: '#stock-search-input',
    addStockButton: '#add-stock',
  },

  initialize() {
    console.log('Initialize Stock Watcher Body')
  },

  regions: {
    stocksHeader: '#stocks-header',
    stocksBody: '#stocks-body'
  },
  
  events: {
    'click @ui.addStockButton': 'onAddStock',
    'change @ui.stockSearchInput': 'onStockSymbolSearchInput', // todo: this doesn't trigger the method. Maybe I should use trigger?
  },

  //todo: this may not be the best lifecycle event on which to do this?
  // Probably would want to re render the cards every time a new stock is
  // added to the data...
  onRender() {
    console.log('Render Stock Watcher Body');
    // todo: destroy children
    //this.showChildView('stocksBody', notClassStocks.map(stock => new StockCard(stock)));
    // this.showChildView('stocksBody', new StockCollection({
    //   collection: stocks
    // }));

    var stocksCollection = new StockCollection({
      collection: stocks
    });
    stocksCollection.render();
  },

  onAddStock() {
    console.log(arguments)
  },

  onStockSymbolSearchInput() {
    console.log(arguments)
  }
});