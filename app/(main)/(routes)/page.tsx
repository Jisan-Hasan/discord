import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discord",
    description: "Discord Clone",
};

export default function Home() {
    return (
        <div>
            <UserButton afterSignOutUrl="/" />
            <ModeToggle/>
        </div>
    );
}
