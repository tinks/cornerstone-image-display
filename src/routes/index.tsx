import { createFileRoute } from "@tanstack/react-router";
import logomark from "@/assets/logomark.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <img
        src={logomark}
        alt="Logomark"
        className="absolute top-6 right-6 w-16 h-16 object-contain"
      />
    </div>
  );
}
