import Image from "next/image";
import Link from "next/link";
import { dummyLinks } from "@/data/links";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center bg-background px-6 pt-12 pb-24">
      {/* Profile Header */}
      <div className="mb-10 flex flex-col items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-2xl font-bold text-muted-foreground ring-4 ring-background shadow-xl">
          M
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">@My-Link</h1>
          <p className="text-sm text-muted-foreground">Minimalist Link Management</p>
        </div>
      </div>

      {/* Link List */}
      <div className="flex w-full max-w-md flex-col gap-4">
        {dummyLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-md active:scale-98">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/50 p-2 overflow-hidden">
                  <img
                    src={
                      link.url.includes("blog.naver.com")
                        ? "https://blog.naver.com/favicon.ico"
                        : `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=128`
                    }
                    alt={link.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <span className="font-medium text-foreground">{link.title}</span>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={16}
                    className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 flex justify-center p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "w-full max-w-md rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-sm h-12"
          )}
        >
          Create your My-Link
        </Link>
      </footer>
    </div>
  );
}
