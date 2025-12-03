"use client";

import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.ico";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Client : Component
import SignInForm from "@/components/Sign-in";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Brand - Centered */}
        <div className="flex justify-center">
          <Link href={"/"} className="inline-flex items-center gap-2">
            <Image src={logo} alt="CodeMaster AI" height={32} width={32} />
            <span className="text-xl font-bold bg-linear-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              CodeMaster AI
            </span>
          </Link>
        </div>

        {/* Sign In Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Sign In
            </CardTitle>
            <CardDescription>
              <p className="text-xl font-medium text-center">
                Welcome back, You&apos;ve been missed!
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* SignInForm */}
            <SignInForm />
          </CardContent>
          <CardFooter>
            <Button className="w-full cursor-pointer">Sign In</Button>
          </CardFooter>
        </Card>

        {/* Language Selector */}
        <div className="flex justify-center">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            English (UK) ▼
          </button>
        </div>
      </div>
    </div>
  );
}
