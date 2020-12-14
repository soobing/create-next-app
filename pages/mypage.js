import { useRouter } from "next/router";

function MyPage() {
  const router = useRouter();

  return (
    <div>
      <h1>MyPage</h1>
      <button onClick={() => router.push("/login")}>go to login</button>
    </div>
  );
}

export default MyPage;
