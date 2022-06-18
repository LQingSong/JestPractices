import { mount } from '@vue/test-utils';
// import TodoAppComponent from '@/components/HelloWorld.vue';
import HelloWorld from '../../src/components/HelloWorld.vue';

test('renders a todo', () => {
  const wrapper = mount(HelloWorld);

  console.log(wrapper);
});
