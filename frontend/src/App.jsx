import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../utils/firebase.js";
import api from "../utils/axios.js";

function App() {
  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", { token });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvider);
    const token = await data.user.getIdToken();
    console.log(token);
    await handleLogin(token);
    console.log(data);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <button
        className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
        onClick={googleLogin}
      >
        Continue with Google
      </button>
    </div>
  );
}

export default App;
