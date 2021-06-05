import { CollectionView } from 'backbone.marionette';
import template from '../templates/stockCard.jst'

export const StockCard = CollectionView.extend({
  template: template
});