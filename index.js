import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

var observer = {
    oldHeight: 0,
    install: () => {
        gsap.registerPlugin(ScrollTrigger);
        let resizeObserver = new ResizeObserver((app) => {
            if (observer.oldHeight != app) ScrollTrigger.refresh();

            observer.oldHeight = app[0].contentRect.height;
        });
        resizeObserver.observe(document.querySelector("#app"));
    },
};

export default observer;
