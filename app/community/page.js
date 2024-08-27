import Link from "next/link";

export default function Community() {
  return (
    <main>
      <h1 style={{ textAlign: "center", color: "white" }}>Community Page</h1>
      <p style={{ textAlign: "center" }}>
        <Link style={{ color: "white" }} href="/">
          Back to the Beginning
        </Link>
      </p>
    </main>
  );
}
