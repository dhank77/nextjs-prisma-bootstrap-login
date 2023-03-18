import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const update = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const loginReq = await fetch("/api/auth/login", {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(login)
    })

    const loginRes = await loginReq.json();
    console.log(loginRes);
  };

  return (
    <>
      <Head>
        <title>Halaman Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="container mt-4 d-flex flex-column justify-content-center"
        style={{ height: "100vh" }}
      >
        <h4 className="text-primary">Halaman Login</h4>
        <div className="card">
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  onChange={update}
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  name="password"
                  onChange={update}
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
