import { mount } from '@vue/test-utils';
import Counter from '../../src/components/Counter.vue';

test('emits an event when clicked', () => {
  const wrapper = mount(Counter);

  wrapper.find('button').trigger('click');
  wrapper.find('button').trigger('click');

  const incrementEvent: any = wrapper.emitted('increment');

  console.log(incrementEvent);

  expect(incrementEvent).toHaveLength(2);
  expect(incrementEvent[0]).toEqual([1]);
});
