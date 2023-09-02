'use client';

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "./ui-theme-toggler";

export default function Header() {
    return (
        <div className="border-b py-2 px-4 flex justify-between">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="text-sm">My Account</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            My Profile <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Upload Replays</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Settings</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Sign Out <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <ModeToggle />
        </div>
    )
}