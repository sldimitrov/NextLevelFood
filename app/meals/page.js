import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1 style={{ textAlign: "center", color: "white" }}>
        This is our Main Meals Page
      </h1>
      <p style={{ textAlign: "center" }}>
        <Link style={{ color: "white" }} href="/meals/share">
          Share food
        </Link>
      </p>
    </main>
  );
}
