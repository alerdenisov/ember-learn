import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.commerce.productName() },
  body: faker.lorem.paragraph
});
