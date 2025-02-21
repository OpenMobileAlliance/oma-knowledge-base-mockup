export default {
  default: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pl-4 pr-4 pb-4 pt-4 mx-auto max-w-md w-full h-full justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 flex shrink-0 mx-auto text-[96px] dark:saturate-[300%] mb-8 z-20",
    title: "title text-[24px] font-extrabold dark:saturate-[300%] break-words z-20",
    subtitle: "subtitle text-[20px] font-bold dark:saturate-[180%] mt-3 break-words z-20",
    text: "text font-light text-[18px] mt-7 break-words z-20",
  },
  flat: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center bg-transparent dark:bg-transparent",
    //coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-fill opacity-100 ease-in-out z-40",
    //coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out dark:bg-neutral-800 bg-white opacity-100 z-40",
    //coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover z-40",
    //coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[96px] dark:saturate-[300%] z-20",
    title: "title text-[24px] font-extrabold dark:saturate-[300%] break-words z-20",
    subtitle: "subtitle text-[20px] font-bold dark:saturate-[180%] mt-1 break-words z-20",
    text: "text font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-[1.3rem] mt-9 break-words z-20"
  },
  teaser: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center hover:shadow-lg duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-60 group-hover:opacity-[10%] transition-opacity duration-500 z-0",
    coverText: "absolute inset-0 flex items-center justify-center text-center ease-in-out opacity-100 group-hover:opacity-[10%] transition-opacity duration-500 z-0",
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-center z-0",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-30 duration-500 group-hover:opacity-[5%] transition-opacity duration-500 z-0",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[96px] dark:saturate-[300%] transition-transform duration-500 ease-in-out group-hover:translate-y-[-0.3rem] transform z-20",
    title: "title mt-16 text-center text-[24px] font-extrabold dark:saturate-[300%] break-words z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-2rem] transform",
    subtitle: "subtitle text-center font-bold dark:saturate-[180%] text-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out mt-1 break-words z-20 transition-transform group-hover:translate-y-[-1.1rem] transform",
    text: "text text-center text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out font-medium mt-2 mb-5 break-words z-20",
  },
  snap: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center hover:shadow-lg duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-60 z-0",
    coverText: "absolute inset-0 flex items-center justify-center text-center text-2xl font-extrabold opacity-30 scale-100 transition-all duration-700 ease-in-out group-hover:translate-y-[45%] group-hover:scale-[0.8] group-hover:opacity-100 group-hover:dark:saturate-[180%] z-10",
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-between z-0 overflow-hidden",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-30 scale-100 transition-all duration-700 ease-in-out group-hover:-translate-y-[6rem] group-hover:scale-[0.2] group-hover:opacity-100 group-hover:dark:saturate-[300%] group-hover:-mt-9 z-0",
    icon: "relative sm:mt-4 mb-8 flex shrink-0 mx-auto text-[3rem] dark:saturate-[300%] transition-transform duration-500 ease-in-out group-hover:opacity-0 group-hover:transition-opacity group-hover:duration-500 transform z-20",
    title: "title mt-32 text-center text-[24px] font-extrabold dark:saturate-[300%] break-words z-20 transition-transform duration-500 ease-in-out group-hover:translate-y-[-2rem] transform",
    subtitle: "subtitle text-center font-bold dark:saturate-[180%] text-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 ease-in-out mt-1 break-words z-20 transition-transform group-hover:translate-y-[-1.1rem] transform",
    text: "text text-center text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ease-in-out font-medium mt-2 mb-5 break-words z-20",
  },
  translate: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pl-3 pr-3 mx-auto max-w-md w-full h-full justify-items-center text-center border-2 border-golden/[0.6] hover:border-golden dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 text-[4rem] dark:saturate-[300%] flex shrink-0 mx-auto z-20",
    title: "title text-xl font-extrabold dark:saturate-[300%] break-words z-20",
    subtitle: "subtitle text-base font-bold dark:saturate-[180%] mt-3 break-words z-20",
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  },
  opacity: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pl-3 pr-3 pt-5 pb-7 mx-auto max-w-md w-full h-full justify-items-center text-center border-2 border-golden/[0.6] hover:border-golden dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-cover opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out transition-opacity duration-700 group-hover:opacity-0 z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 text-[96px] dark:saturate-[300%] flex shrink-0 mx-auto z-20",
    title: "title text-[24px] font-extrabold dark:saturate-[300%] break-words z-20",
    subtitle: "subtitle text-[20px] font-bold dark:saturate-[180%] mt-3 break-words z-20",
    text: "text font-light text-[18px] mt-7 break-words z-20",
  },
  cta: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl p-4 mx-auto max-w-md w-full h-full justify-items-center text-center border-2 bg-golden/[0.4] border-golden/[0.6]",
    coverImage: "absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-60 z-0",
    coverText: "absolute inset-0 flex items-center justify-center text-center opacity-60 z-0",
    coverIconWrapper: "absolute inset-0 w-full h-full flex items-center justify-center z-0",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-60 z-0",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative text-start sm:mt-4 mb-8 flex shrink-0 text-[3rem] z-20",
    title: "title text-4xl text-start font-extrabold dark:saturate-[300%] text-black dark:text-golden break-words z-20",
    subtitle: "subtitle text-2xl text-start font-bold dark:saturate-[180%] text-black dark:text-golden mt-1 break-words z-20",
    underline: "underline underline-offset-[1.5rem] decoration-2 dark:decoration-golden/[0.4]",
    text: "text mt-8 font-light text-[1.1rem] text-start text-neutral-800 dark:text-golden break-words z-20",
  },
  logo: {
    wrapper: "container overflow-hidden relative group flex flex-col rounded-2xl pl-3 pr-3 mx-auto max-w-md w-full h-full justify-items-center text-center border-2 border-golden/[0.6] hover:border-golden dark:border-neutral-600 dark:hover:border-golden",
    coverImage: "absolute mb-0 bottom-0 left-0 w-full h-full object-contain bg-white transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverText: "absolute inset-0 flex items-center justify-center text-center dark:bg-neutral-800 bg-white transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverIconWrapper: "bg-white dark:bg-neutral-800 absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:-translate-y-full z-40",
    coverIcon: "absolute inset-0 w-full h-full object-cover opacity-100 ease-in-out z-40",
    image: "relative mt-4 w-full h-auto flex shrink mx-auto z-20",
    icon: "relative sm:mt-4 mb-8 text-[8rem] dark:saturate-[300%] flex shrink-0 mx-auto z-20",
    title: "title text-xl font-extrabold dark:saturate-[300%] break-words z-20",
    subtitle: "subtitle text-base font-bold dark:saturate-[180%] mt-3 break-words z-20",
    text: "text font-light text-[1.1rem] mt-7 break-words z-20",
  }
}