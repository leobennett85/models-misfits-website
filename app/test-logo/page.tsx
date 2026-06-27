import AnimatedLogo from "@/components/logo/AnimatedLogo";

export default function TestLogoPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#f8f6f2]
        p-10
      "
    >
      <div className="w-full max-w-6xl">
        <AnimatedLogo />
      </div>
    </main>
  );
}