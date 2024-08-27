import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p style={{ textAlign: "center" }}>
        <Link style={{ color: "white" }} href="/meals">
          Search for meals
        </Link>
        <br />
        <Link style={{ color: "white" }} href="/community">
          Join our community
        </Link>
      </p>
    </main>
  );
}
