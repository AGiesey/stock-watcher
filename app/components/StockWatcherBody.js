import { View } from 'backbone.marionette';
import template from '../templates/StockWatcherBody.jst';

//todo: add regions and child views
export const StockWatcherBody = View.extend({
  template: template,

  ui: {
    stockSearchInput: '#stock-search-input',
    addStockButton: '#add-stock',
  },
  
  events: {
    'click @ui.addStockButton': 'onAddStock',
    'change @ui.stockSearchInput': 'onStockSymbolSearchInput', // todo: this doesn't trigger the method. Maybe I should use trigger?
  },

  onAddStock() {
    console.log(arguments)
  },

  onStockSymbolSearchInput() {
    console.log(arguments)
  }
});