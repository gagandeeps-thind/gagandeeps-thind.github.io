/* empty css                                 */
import { c as createComponent, r as renderHead, a as renderComponent, F as Fragment, b as renderTemplate, d as renderSlot } from '../chunks/astro/server_CXxR36I_.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState as useState$1 } from 'react';
export { renderers } from '../renderers.mjs';

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>Gagandeep Thind Portfolio</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-black text-white font-sans scroll-smooth"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LuxuryBackground", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/g11oc/OneDrive/Desktop/portfolio/src/components/LuxuryBackground.jsx", "client:component-export": "default" })} ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "C:/Users/g11oc/OneDrive/Desktop/portfolio/src/layouts/BaseLayout.astro", void 0);

function SectionManager({ index, setIndex }) {
  const [direction, setDirection] = useState(1);
  const sectionCount = 5;
  const handleWheel = (e) => {
    if (e.deltaY > 30 && index < sectionCount - 1) {
      setDirection(1);
      setIndex((i) => i + 1);
    } else if (e.deltaY < -30 && index > 0) {
      setDirection(-1);
      setIndex((i) => i - 1);
    }
  };
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);
  const variants = {
    enter: (dir) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 })
  };
  const sections = [
    /* @__PURE__ */ jsx(Hero, {}, "hero"),
    /* @__PURE__ */ jsx(Experience, {}, "exp"),
    /* @__PURE__ */ jsx(Skills, {}, "skills"),
    /* @__PURE__ */ jsx(Projects, {}, "projects"),
    /* @__PURE__ */ jsx(Education, {}, "edu")
  ];
  return /* @__PURE__ */ jsx("div", { className: "h-screen w-full overflow-hidden relative", children: /* @__PURE__ */ jsx(AnimatePresence, { custom: direction, mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      custom: direction,
      variants,
      initial: "enter",
      animate: "center",
      exit: "exit",
      transition: { duration: 0.8, ease: "easeInOut" },
      className: "absolute inset-0",
      children: sections[index]
    },
    index
  ) }) });
}

function StickyNavbar({ index, setIndex }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const sectionIDs = ["hero", "experience", "skills", "projects", "education"];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 ease-in-out backdrop-blur-md bg-black/30 flex items-center justify-center space-x-8 ${scrolled ? "py-2 shadow-lg backdrop-blur-lg bg-black/50" : "py-6"}`,
      children: sectionIDs.map((label, i) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIndex(i),
          className: "relative text-white text-sm tracking-wide px-2 py-1 transition-all duration-300 hover:text-cyan-400 group",
          children: [
            label.replace(/^\w/, (l) => l.toUpperCase()),
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(34,211,238,0.6)]" })
          ]
        },
        label
      ))
    }
  );
}

function FullPageRouter() {
  const [index, setIndex] = useState$1(0);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(StickyNavbar, { index, setIndex }),
    /* @__PURE__ */ jsx(SectionManager, { index, setIndex })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FullPageRouter", FullPageRouter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/g11oc/OneDrive/Desktop/portfolio/src/components/FullPageRouter.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/g11oc/OneDrive/Desktop/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/g11oc/OneDrive/Desktop/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
