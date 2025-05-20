"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bitcoin, Menu, MessageSquare, Bell, X, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { User } from "@/lib/types";
import { useWallet } from "@/lib/hooks/useWallet";
import { shortenAddress } from "@/lib/utils/format";

interface HeaderProps {
  user?: User | null;
}

export function Header({ user }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isConnected, address, connectWallet, disconnectWallet, error } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Bitcoin className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Bitdoo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/dashboard"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/projects"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/payments"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Payments
          </Link>
          <Link
            href="/messages"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Messages
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isConnected ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <ModeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 px-4"
                  >
                    <Wallet className="h-5 w-5" />
                    <span className="hidden sm:inline">
                      {shortenAddress(address || '')}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Connected Wallet
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {shortenAddress(address || '')}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/wallet" className="w-full">
                      Wallet Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={disconnectWallet}>
                    Disconnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <ModeToggle />
              <Button onClick={connectWallet} className="flex items-center space-x-2">
                <Wallet className="h-5 w-5" />
                <span>Connect Wallet</span>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/dashboard"
              className="text-foreground py-2"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/projects"
              className="text-foreground py-2"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/payments"
              className="text-foreground py-2"
              onClick={() => setMenuOpen(false)}
            >
              Payments
            </Link>
            <Link
              href="/messages"
              className="text-foreground py-2"
              onClick={() => setMenuOpen(false)}
            >
              Messages
            </Link>
            {isConnected ? (
              <>
                <Link
                  href="/wallet"
                  className="text-foreground py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Wallet Settings
                </Link>
                <Button onClick={disconnectWallet} className="w-full">
                  Disconnect Wallet
                </Button>
              </>
            ) : (
              <Button onClick={connectWallet} className="w-full">
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}