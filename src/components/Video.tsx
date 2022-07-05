import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, FileArrowDown, Image } from "phosphor-react";
import { Btn } from "./Button";
import { Footer } from "./Footer";
import { Spin } from "../Spinning";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import "@vime/core/themes/default.css";
import { Teacher } from "./TeacherLesson";
import { BtnComplement } from "./ComplementsBtn";

interface VideoProps {
  lessonSlug: string;
}
export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery ({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    // || !data.lesson tratando  nulo ou indefino 
    return <Spin />;
  }
  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-black flex justify-center p-0">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube
              lang="br"
              videoId={data.lesson.videoId}
              key={data.lesson.videoId}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="flex p-6 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 flex-col lg:flex-row">
          <div className="flex-1  ">
            <h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
            <p className=" text-gray-200  mt-4 leading-relaxed">
              {data.lesson.description}
            </p>
            {
              //tratando dados opcionais
              data.lesson.teacher && (
                <Teacher
                  name={data.lesson.teacher.name}
                  bio={data.lesson.teacher.bio}
                  avatarURL={data.lesson.teacher.avatarURL}
                />
              )
            }
          </div>
          <div className="flex gap-4 flex-row w-full lg:flex-col lg:w-fit ">
            <Btn buttonType="color" />
            <Btn buttonType="transparent" />
          </div>
        </div>
      </div>
      <div className="flex  p-6 lg:justify-center">
        <div className="gap-8 mt-8 grid grid-rows-2 max-w-[1100px] lg:grid-cols-2 w-full lg:p-6   ">
          <BtnComplement buttonType="complement" />
          <BtnComplement buttonType="wallpaper" />
        </div>
      </div>
      <div className="p-6">
        <Footer />
      </div>
    </div>
  );
}
