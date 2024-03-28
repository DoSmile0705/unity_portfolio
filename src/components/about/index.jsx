import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl text-left capitalize md:text-2xl">
            Web & Unity 3D developer
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base ">
            Welcome to my portfolio as a Unity 3D developer.
            With 7 years of experience in web development and 4 years specializing in Unity 3D development, I bring a wealth of knowledge and expertise to the table. My skills extend across various fields, including metaverse and online games, allowing me to tackle diverse and exciting projects. I thrive in collaborative environments and actively engage with the developer community.

            If you&apos;re seeking creative and innovative solutions, partnering with me will be a rewarding experience. I am committed to delivering optimized and advanced products that exceed expectations. Your vision will be transformed into a captivating reality through my dedication and skill.

              Thank you for considering me as your developer. I am eager to embark on new ventures and contribute to your success. Let&apos;s create something extraordinary together.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-2 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            15+ <sub className="text-base font-semibold">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-2 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            40+{" "}
            <sub className="text-base font-semibold">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            7+{" "}
            <sub className="text-base font-semibold">years of experience</sub>
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=fullsuccess.world&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Minato"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=fullsuccess.world&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Minato"
            loading="lazy"
          />
        </ItemLayout> */}

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Minato"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=fullsuccess.world&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Minato"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/fullsuccess.world/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=fullsuccess.world&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Minato"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
