"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Twitter,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-[#f7f8fa] dark:bg-[#0c0a09]">
      {/* bg-[#f7f8fa] */}
      <div className="container mx-auto px-4 py-12 pt-44 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left side - Contact Form */}
          <div className="flex flex-col">
            <div className="mb-2">
              <div className="flex items-center gap-2 text-emerald-500 font-medium">
                <Sparkles className="h-5 w-5" />
                {/* <span className="uppercase tracking-wide">Testimonials</span> */}
                <span className="text-green-500 text-sm font-normal tracking-wider">
                  CONNECT WITH ME
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium w-3/4 mb-10 leading-tight">
              Let&apos;s start a project together
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm  font-normal">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-normal">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-normal">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3 min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-black dark:bg-white dark:text-black text-white hover:bg-black/90 rounded-full px-8 py-2"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right side - Profile Card */}
          <div className="flex items-center justify-center">
            <Card className="w-full  shadow-sm border rounded-3xl p-6">
              <CardContent className="p-0">
                <div className="flex items-center lg:w-1/3  md:w-1/2 w-2/3 rounded-full py-2 px-4 bg-[#f7fff0] gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm text-gray-600">
                    Available for work
                  </span>
                </div>

                <div className="flex flex-col items-start text-justify">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 mb-6">
                    <img
                      src="/sharif.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-justify text-gray-700 dark:text-white mb-6">
                    My inbox is always open. Whether you have a project or just
                    want to say Hi. I would love to hear from you. Feel free to
                    contact me and I&apos;ll get back to you.
                  </p>

                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className="text-gray-700 hover:text-black dark:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-black dark:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-black dark:text-white transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-black dark:text-white transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-black dark:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
