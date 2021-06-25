import React, { FC, FormEvent, useEffect, useState } from 'react';
import { LoginUser } from '../../../interfaces/User';
import AuthLayout from '../AuthLayout';
import crypto from 'crypto';

const defaultLoginUser: LoginUser = {
  user: '',
  password: ''
};
const salt = 'eee';

export const GetApi: FC = () => {
  const [form, setForm] = useState<LoginUser>(defaultLoginUser);
  const { user, password } = form;
  const [apiUrl, setApiUrl] = useState('');

  const onInput = ({ target }: { target: EventTarget | null }) => {
    const { name, value } = target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  const getApi = (e: FormEvent) => {
    e.preventDefault();
    const apikey = crypto
      .createHash('sha1')
      .update(salt + user + password)
      .digest('hex');
    const tApiUrl = 'https://' + location.host + '/api/users/bykey/' + apikey;
    setApiUrl(tApiUrl);
  };

  return (
    <AuthLayout>
      <div className="login-form">
        <form onSubmit={getApi}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="au-input au-input--full"
              type="text"
              name="user"
              placeholder="Email"
              value={user}
              onInput={onInput}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="au-input au-input--full"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onInput={onInput}
            />
          </div>
          <button
            className="au-btn au-btn--block au-btn--green m-b-20"
            type="submit"
          >
            Get Api
          </button>
        </form>
        <form>
          <div className="form-group">
            <label>API URL</label>
            <textarea
              className="au-input au-input--full"
              name="apiUrl"
              placeholder="API URL"
              value={apiUrl}
            />
          </div>
        </form>
        <a className="au-btn au-btn--block au-btn--green m-b-20" href="/">
          BACK
        </a>
      </div>
    </AuthLayout>
  );
};

export default GetApi;
