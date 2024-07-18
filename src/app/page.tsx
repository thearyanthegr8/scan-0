import VulnerabilityDrawer from "@/components/custom/vulnerability-drawer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <VulnerabilityDrawer />
    </main>
  );
}
