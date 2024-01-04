import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import MainImg from "@/assets/main.svg";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <header className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
        <Image src={Logo} alt="Jobster Logo" />
      </header>
      <section className="mx-auto -mt-20 grid h-screen max-w-6xl items-center gap-4 px-4 sm:px-8 md:grid-cols-[1fr,400px]">
        <div>
          <h1 className="text-4xl font-bold capitalize lg:text-7xl">
            Job <span className="text-primary">Tracking</span>
          </h1>
          <p className="mt-4 max-w-md leading-loose">
            I am baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image
          src={MainImg}
          alt="Landing Page Image"
          className="hidden md:block "
        />
      </section>
    </main>
  );
}
