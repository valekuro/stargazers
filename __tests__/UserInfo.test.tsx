import React from 'react';
import {render} from '@testing-library/react-native';
import UserInfo from '../src/screens/ResultScreen/UserInfo';

const MOCK_USERINFO = {
  userInfo: {
    login: 'EbookFoundation',
    id: 14127308,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE0MTI3MzA4',
    avatar_url: 'https://avatars.githubusercontent.com/u/14127308?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/EbookFoundation',
    html_url: 'https://github.com/EbookFoundation',
    followers_url: 'https://api.github.com/users/EbookFoundation/followers',
    following_url:
      'https://api.github.com/users/EbookFoundation/following{/other_user}',
    gists_url: 'https://api.github.com/users/EbookFoundation/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/EbookFoundation/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/EbookFoundation/subscriptions',
    organizations_url: 'https://api.github.com/users/EbookFoundation/orgs',
    repos_url: 'https://api.github.com/users/EbookFoundation/repos',
    events_url: 'https://api.github.com/users/EbookFoundation/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/EbookFoundation/received_events',
    type: 'Organization',
    site_admin: false,
    name: 'Free Ebook Foundation',
    company: null,
    blog: 'https://ebookfoundation.org/',
    location: 'virtual',
    email: 'info@ebookfoundation.org',
    hireable: null,
    bio: 'Making the world safe for free ebooks.',
    twitter_username: null,
    public_repos: 33,
    public_gists: 0,
    followers: 5618,
    following: 0,
    created_at: '2015-09-04T14:12:36Z',
    updated_at: '2023-10-12T11:27:52Z',
  },
  users: 10,
};

describe('Error message component', () => {
  test('it should be renders the error message correctly', () => {
    const userinfo_ = render(
      <UserInfo
        userInfo={MOCK_USERINFO.userInfo}
        users={MOCK_USERINFO.users}
      />,
    );
    expect(userinfo_.queryByTestId('title')).toBeDefined();
    expect(userinfo_.queryByTestId('description')).toBeDefined();
  });
});
