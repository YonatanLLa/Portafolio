export const handleScroll = () => {
    if (!hasFrontAnimated) {
      const frontElement = document.getElementById("front");
      if (frontElement) {
        const frontElementTop = frontElement.getBoundingClientRect().top;
        const frontElementBottom = frontElement.getBoundingClientRect().bottom;
        const windowBottom = window.innerHeight;

        if (frontElementTop < windowBottom && frontElementBottom > 0) {
          setIsFrontInView(true);
        } else {
          setIsFrontInView(false);
        }
      }
    }

    if (!hasBackAnimated) {
      const backElement = document.getElementById("back");
      if (backElement) {
        const backElementTop = backElement.getBoundingClientRect().top;
        const backElementBottom = backElement.getBoundingClientRect().bottom;
        const windowBottom = window.innerHeight;

        if (backElementTop < windowBottom && backElementBottom > 0) {
          setIsBackInView(true);
        } else {
          setIsBackInView(false);
        }
      }
    }
  };