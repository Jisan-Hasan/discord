import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discord",
    description: "Discord Clone",
};

export default function Home() {
    return (
        <div>
            <p className="text-3xl font-bold text-indigo-500">
                Hello Discord Clone
            </p>

            <Button>Click Me</Button>
        </div>
    );
}
