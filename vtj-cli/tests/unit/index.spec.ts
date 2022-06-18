import { mount } from '@vue/test-utils';

const Nav = {
  template: `
  <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
      <ul v-show="shouldShowDropdown" id="user-dropdown">
        <!-- dropdown content -->
      </ul>
    </nav>
  `,
  data() {
    return {
      admin: false,
      shouldShowDropdown: false
    };
  }
};

test('render a profile link', () => {
  const wrapper = mount(Nav);

  const profileLink = wrapper.get('#profile');

  expect(profileLink.text()).toEqual('My Profile');
});

test('does not render an admin link', () => {
  const wrapper = mount(Nav);

  expect(wrapper.find('#admin').exists()).toBe(false);
});

test('renders an admin link', () => {
  const wrapper = mount(Nav, {
    data() {
      return {
        admin: true
      };
    }
  });

  expect(wrapper.get('#admin').text()).toEqual('Admin');
});

test('does not show the user dropdown', () => {
  const wrapper = mount(Nav);

  expect(wrapper.get('#user-dropdown').isVisible()).toBe(false);
});
