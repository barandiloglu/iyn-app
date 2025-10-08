// Animation utility functions for performance optimization

export const getAnimationDuration = (isMobile: boolean, desktopDuration: number) => {
  return isMobile ? desktopDuration * 0.5 : desktopDuration;
};

export const getAnimationDelay = (isMobile: boolean, desktopDelay: number) => {
  return isMobile ? desktopDelay * 0.5 : desktopDelay;
};

export const getViewportConfig = (isMobile: boolean) => ({
  once: true,
  margin: isMobile ? "-20px" : "-50px"
});

export const getWillChangeStyle = () => ({
  willChange: "transform, opacity" as const
});
