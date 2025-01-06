import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <section className="w-[80%] min-h-screen max-w-screen-2xl space-y-8 flex justify-center flex-col">
      <h1 className="text-8xl font-bold tracking-wide">
      Your Journey <br /> Your Car <br /> Your Way
      </h1>

      <p className="text-lg w-[40%] mt-2">
        Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum
        vel euismod aliquam. Amet ultrices neque augue consectetur purus
        phasellus. Ullamcorper lorem montes varius amet vestibulum tellus
        facilisis consequat pretium. Et faucibus laoreet molestie diam semper
        fames diam eget.
      </p>

      <Button variant={"destructive"} className=" text-xl font-bold mr-auto px-6 py-6">
        About Us
        <Send />
      </Button>
    </section>
  );
};

export default Home;
