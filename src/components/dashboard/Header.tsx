import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-6">
        {/* Left section with logo and title */}
        <div className="flex items-center gap-4">
          <span className="text-primary font-bold text-xl">RedExt</span>
          <span className="text-muted-foreground hidden sm:inline-block">Command & Control</span>
        </div>

        {/* Center section - can be used for search or other controls */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4">
          <form className="flex-1 max-w-[400px]">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8"
              />
            </div>
          </form>
        </div>

        {/* Right section with status and actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-muted-foreground hidden sm:inline-block">System Online</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </header>
  );
};