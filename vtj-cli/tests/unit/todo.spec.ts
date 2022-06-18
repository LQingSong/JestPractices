import { mount } from '@vue/test-utils';
import TodoApp from '@/components/TodoApp.vue';

describe('test', () => {
  test.skip('renders a todo', () => {
    const wrapper = mount(TodoApp);

    const todo = wrapper.get('[data-test="todo"]');

    expect(todo.text()).toBe('Learn Vue.js 3');
  });

  // test 是以同步的方式调用方法，但是DOM是异步更新的，所以需要使用asyn/await
  test('create a todo', async () => {
    const wrapper = mount(TodoApp);
    await wrapper.get('[data-test="new-todo"]').setValue('New todo');

    await wrapper.get('[data-test="form"]').trigger('submit');

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });

  test('completes a todo', async () => {
    const wrapper = mount(TodoApp);

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed');
  });
});
