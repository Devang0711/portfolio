import { useEffect, useMemo, useRef, useState } from "react"



const useIsMobaile = (query = "(max-width : 639px)") => {
  const [isMobaile , setIsMobaile] = useState(
    typeof window !=="undefined"  && window.metchMedia(query).matches
  )
  useEffect(() =>{
    if(typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobaile(e.matches);

    mql.addEventListener("change" , handler);
    setIsMobaile(mql.matches);
    return() => mql.removeEventListener("chang" , handler);

  },[query])
  return isMobaile;
}


export default function projects () {
  const isMobaile= useIsMobaile();
  const sceneRef = useRef(null);

  const projects = useMemo(() => [
     {
        title: "nk studio",
        link: "https://www.nk.studio/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1, // use mobile or desktop image
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },

  ], [isMobaile]  //re-run only when `isMobaile` changes
);

  return(

    <section id="projects " className="relative text-white ">

    </section>
  )
}