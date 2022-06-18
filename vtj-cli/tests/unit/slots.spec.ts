import { mount } from '@vue/test-utils';

const Layout = {
  template: `
    <div class="main">
      <slot />
    </div>
  `
};
test('layout default slot', () => {
  const wrapper = mount(Layout, {
    slots: {
      default: [`<div id="one">Default Slot</div>`, `<div id="two">Tow</div>`]
    }
  });
  expect(wrapper.find('.main').text()).toContain('Default Slot');
});

const ComponentWithSlots = {
  template: `
    <div class="scoped">
      <slot name="scoped" v-bind="{ msg }" />
    </div>
  `,
  data() {
    return {
      msg: 'world'
    };
  }
};

test('scoped slots', () => {
  const wrapper = mount(ComponentWithSlots, {
    slots: {
      scoped: `<template #scoped="params">
        Hello {{ params.msg }}
        </template>
      `
    }
  });

  expect(wrapper.html()).toContain('Hello world');
});
