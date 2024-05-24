"use client";

import { useState } from "react";
import { Avatar } from "@/components/profile/avatar";
import { Button } from "@/components/profile/button";
import { Card } from "@/components/profile/card";
import {
  ListBulletIcon as ListIcon,
  BriefcaseIcon as LuggageIcon,
  CurrencyDollarIcon as DollarSignIcon,
  Bars3Icon as MenuIcon,
} from "@heroicons/react/24/outline";

function ProfilePage() {
  const [avatar, setAvatar] = useState<string>("/placeholder.svg");

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col items-center mb-4">
        <Avatar
          src="/placeholder.svg"
          alt="Profile photo"
          className="w-24 h-24 mb-2 relative"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="hidden"
          id="avatar-upload"
        />
        <label htmlFor="avatar-upload">
          <span className="inline-block">
            <Button variant="ghost">Update photo</Button>
          </span>
        </label>
        <Button className="mt-2" variant="destructive">
          Delete Account
        </Button>
      </div>
      <div className="grid gap-4 w-full">
        <Card className="flex items-center p-4">
          <ListIcon className="h-10 w-10 text-purple-500" />
          <div className="ml-4">
            <div className="text-lg font-semibold">0</div>
            <div className="text-gray-700">My Lists</div>
          </div>
        </Card>
        <Card className="flex items-center p-4">
          <LuggageIcon className="h-10 w-10 text-green-500" />
          <div className="ml-4">
            <div className="text-lg font-semibold">0</div>
            <div className="text-gray-700">My Trips</div>
          </div>
        </Card>
        <Card className="flex items-center p-4">
          <DollarSignIcon className="h-10 w-10 text-yellow-500" />
          <div className="ml-4">
            <div className="text-lg font-semibold">0</div>
            <div className="text-gray-700">My Wallet</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProfilePage;
