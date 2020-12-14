import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => router.push("/mypage")}>go to mypage</button>
    </div>
  );
}

export default Login;
