import { useCallback, useState } from "react";

interface IUseTranslateHeader {
  top: number;
  position: "relative" | "fixed";
  translateHeaderOnScroll: () => void;
  boxShadow: string | null;
}

export const useTranslateHeader = (): IUseTranslateHeader => {
  const [top, setTop] = useState(0);
  const [position, setPosition] = useState<"relative" | "fixed">("relative");
  const [boxShadow, setBoxShadow] = useState<string | null>(null);

  const translateHeaderOnScroll = useCallback(() => {
    if (pageYOffset >= 350 - 65) {
      setTop(-290);
      setPosition("fixed");
      setBoxShadow("0 0 25px 5px #000");
      document.getElementById("__next").style.paddingTop = "350px";
    } else {
      setTop(0);
      setPosition("relative");
      setBoxShadow(null);
      document.getElementById("__next").style.paddingTop = "0";
    }
  }, []);

  return { top, position, boxShadow, translateHeaderOnScroll };
};
