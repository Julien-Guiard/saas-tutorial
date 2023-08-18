"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./card";

const testimonials = [
  {
    name: "Abraham Lincoln",
    avatar: "A.L.",
    title: "16th president of the United States",
    description: "This is the best application I've used!",
  },
  {
    name: "Hari Seldon",
    avatar: "H.S.",
    title: "Inventor of psychohistory",
    description: "Empire wouldn't have fallen if I had this!",
  },
  {
    name: "Marie Curie",
    avatar: "M.C.",
    title: "Pioneering Physicist",
    description: "Makes my radium research look like child's play!",
  },
  {
    name: "Frodo Baggins",
    avatar: "F.B.",
    title: "Ring-bearer",
    description: "If I had this on my journey, Mordor would've been a breeze!",
  },
  {
    name: "Ariel",
    avatar: "A.",
    title: "Mermaid Princess",
    description:
      "Who needs legs when this app makes me feel on top of the world?",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
