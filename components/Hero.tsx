import React from "react";
import SocialLinks from "@/components/social-links";
import { HandIcon as HandWaving } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="">
      {" "}
      <main className="min-h-screen flex flex-col">
        {/* <Navbar /> */}

        <div className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col">
          <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <HandWaving className="h-6 w-6 text-green-500 animate-pulse" />
              <p className="text-lg">Hey! It&apos;s me Sharif Mahamud.</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">
              Crafting{" "}
              <span className="text-[#30af5b]">purpose driven experiences</span>{" "}
              that inspire & engage.
            </h1>

            <div className="mt-12 border-t border-border pt-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div></div>
                <p className="text-muted-foreground text-lg">
                  I work with brands globally to build pixel-perfect, engaging,
                  and accessible digital experiences that drive results and
                  achieve business goals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <SocialLinks />
              <Button size="lg" className="rounded-full dark:bg">
                Know me better
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
