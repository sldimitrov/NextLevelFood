import Link from "next/link";

export default function Share() {
  return (
    <main>
      <h1 style={{ textAlign: "center", color: "white" }}>Share Food Page</h1>
      <p style={{ textAlign: "center" }}>
        <Link style={{ color: "white" }} href="/">
          Back to the Beginning
        </Link>
      </p>
    </main>
  );
}
