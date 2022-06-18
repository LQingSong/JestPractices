import { mount } from "@vue/test-utils";

test("init", () => {
  expect(true).toBe(true);
});

const testComponent = {
  template: `<p>{{ msg }}</p>`,
  props: ["msg"],
};

/**
 * @jest-environment jsdom
 */
test("displays message", () => {
  const wrapper = mount(testComponent, {
    props: {
      msg: "Hello world",
    },
  });

  expect(wrapper.text()).toContain("Hello world");
});
