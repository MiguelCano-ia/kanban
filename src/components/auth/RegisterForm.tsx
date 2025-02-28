"use client";

import type React from "react";
import { useActionState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Loader2 } from "lucide-react";
import { register } from "@/actions/auth/register.action";
import { useAuthStore } from "@/stores/auth.store";

export const RegisterForm = () => {
  const registerUser = useAuthStore((state) => state.registerUser);
  const [state, action, pending] = useActionState(register, undefined);

  if (state && !state.errors) {
    registerUser({ ...state });
  }

  return (
    <div className="grid gap-6">
      <form action={action}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="John Doe"
              type="text"
              name="username"
              autoCapitalize="words"
              autoComplete="username"
              autoCorrect="off"
              disabled={pending}
            />
          </div>
          {state?.errors?.username && (
            <p className="text-red-500 text-sm">{state.errors.username}</p>
          )}
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={pending}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Create a password"
              type="password"
              name="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={pending}
            />
          </div>
          <Button type="submit" disabled={pending}>
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>
        </div>
      </form>
      {state?.errors && <p className="text-red-500">{state.errors.message}</p>}
    </div>
  );
};
