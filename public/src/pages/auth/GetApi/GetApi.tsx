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
  const [querystring, setQueryString] = useState('');

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
    const tmp_querystring = `{key: ${apikey}}`;
    setQueryString(tmp_querystring);
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
            <input
              className="au-input au-input--full"
              type="text"
              name="apiurl"
              value={'https://' + location.host + '/api/'}
            />
          </div>
          <div className="form-group">
            <label>Query String</label>
            <textarea
              className="au-input au-input--full"
              name="querystring"
              placeholder="Query String"
              value={querystring}
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
