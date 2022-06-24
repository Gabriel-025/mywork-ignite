import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, FileArrowDown, Image } from "phosphor-react";
import { Btn } from "./Button";
import { Footer } from "./Footer";

import "@vime/core/themes/default.css"
import { useQuery } from "@apollo/client";
import { GET_LESSON_BY_SLUG_QUERY } from "../queries/lesson";
import { Spin } from "../Spinning";


interface GetLessonBySlug {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}
export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlug>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data) {
    return (
      <Spin/>
    );
}


  return (
    <div className="flex-1 flex flex-col  ">
      <div className="bg-black flex justify-center p-0">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube  lang="br"  videoId={data.lesson.videoId} key={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="flex p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1  ">
            <h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
            <p className=" text-gray-200  mt-4 leading-relaxed">
              {data.lesson.description}
            </p>
            <div className="flex items-center gap-4 py-3  mt-6 ">
              <img
                src={data.lesson.teacher.avatarURL}
                className="rounded-full w-[63.38px] h-[63.38px] border-[2px] border-blue-500"
              />
              <div className="flex flex-col leading-relaxed">
                <strong className="text-2xl block font-bold  ">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-sm  text-gray-200 block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Btn buttonType="color" />
            <Btn buttonType="transparent" />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="gap-8 mt-8 grid grid-cols-2  p-8 max-w-[1100px]  ">
          <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} weight="light" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2 w-full ">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={40} />
            </div>
          </a>

          <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <Image size={40} weight="light" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={40} />
            </div>
          </a>
        </div>
      </div>
      <div className="p-6">
        <Footer />
      </div>
    </div>
  );
}
