import { View } from 'backbone.marionette';
import template from '../templates/stockCard.jst'

export const StockCard = View.extend({
  template: template,

  onRender() {
    console.log('Render Stock Card');
  }
});