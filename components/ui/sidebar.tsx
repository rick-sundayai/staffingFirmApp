"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
      },
      [setOpenProp, open]
    );

    // Helper to toggle the sidebar
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    return (
      <SidebarContext.Provider
        value={{
          state: open ? "expanded" : "collapsed",
          open,
          setOpen,
          openMobile,
          setOpenMobile,
          isMobile,
          toggleSidebar,
        }}
      >
        <div
          ref={ref}
          className={cn("flex h-full", className)}
          style={style}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn("", className)}
      onClick={(e) => {
        toggleSidebar();
        onClick?.(e);
      }}
      {...props}
    >
      <PanelLeft className="h-4 w-4" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { state, open, openMobile, setOpenMobile, isMobile } = useSidebar();

  return (
    <>
      {isMobile ? (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetContent
            side="left"
            className={cn(
              "w-full max-w-none border-r bg-sidebar p-0 shadow-none",
              SIDEBAR_WIDTH_MOBILE
            )}
          >
            <div
              ref={ref}
              className={cn(
                "flex h-full flex-col gap-4 overflow-hidden bg-sidebar text-sidebar-foreground",
                className
              )}
              {...props}
            >
              {children}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <div
          ref={ref}
          className={cn(
            "relative hidden h-full flex-col gap-4 overflow-hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out md:flex",
            state === "expanded" ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_ICON,
            className
          )}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center px-4 py-2", className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-auto px-4", className)}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-auto flex flex-col gap-4 px-4 py-4", className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
});
SidebarMenu.displayName = "SidebarMenu";

const sidebarMenuItemVariants = cva(
  "group flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        ghost: "hover:bg-transparent hover:text-sidebar-accent-foreground",
      },
      isActive: {
        true: "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      isActive: false,
    },
  }
);

const SidebarMenuItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> &
    VariantProps<typeof sidebarMenuItemVariants> & {
      asChild?: boolean;
      icon?: React.ReactNode;
      isActive?: boolean;
    }
>(
  (
    {
      asChild = false,
      isActive = false,
      variant,
      className,
      children,
      icon,
      ...props
    },
    ref
  ) => {
    const { state } = useSidebar();
    const Comp = asChild ? Slot : "a";

    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Comp
              ref={ref}
              className={cn(
                sidebarMenuItemVariants({ variant, isActive, className })
              )}
              {...props}
            >
              {icon}
              {state === "expanded" && children}
            </Comp>
          </TooltipTrigger>
          {state === "collapsed" && (
            <TooltipContent side="right" className="flex items-center">
              {children}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
};
