import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { APP_CONFIG } from '../config';

interface SidebarContextType {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  toggleSidebar: () => void;
  collapseSidebar: () => void;
  expandSidebar: () => void;
  toggleMobile: () => void;
  closeMobile: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Auto-collapse sidebar on desktop when user scrolls
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (window.innerWidth >= APP_CONFIG.breakpoints.md) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsCollapsed(true);
        }, APP_CONFIG.ui.sidebarAutoHideDelay);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Expand sidebar on hover (desktop only)
  useEffect(() => {
    if (window.innerWidth < APP_CONFIG.breakpoints.md) return;
    
    let mouseTimeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= APP_CONFIG.breakpoints.md) {
        if (e.clientX <= APP_CONFIG.ui.sidebarProximityThreshold && isCollapsed) {
          setIsCollapsed(false);
        } else if (e.clientX > APP_CONFIG.ui.sidebarWidth.expanded + 24) {
          clearTimeout(mouseTimeout);
          mouseTimeout = setTimeout(() => {
            setIsCollapsed(true);
          }, APP_CONFIG.ui.sidebarExpandDelay);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, [isCollapsed]);

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const collapseSidebar = useCallback(() => {
    setIsCollapsed(true);
  }, []);

  const expandSidebar = useCallback(() => {
    setIsCollapsed(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        isMobileOpen,
        toggleSidebar,
        collapseSidebar,
        expandSidebar,
        toggleMobile,
        closeMobile,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
