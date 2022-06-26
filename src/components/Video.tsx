import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, FileArrowDown, Image } from "phosphor-react";
import { Btn } from "./Button";
import { Footer } from "./Footer";
import { Spin } from "../Spinning";

import { useGetLessonBySlugQuery } from "../graphql/generated";
import "@vime/core/themes/default.css";
import { Teacher } from "./TeacherLesson";



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
    <div className="flex-1 flex flex-col  ">
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

      <div className="flex p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1  ">
            <h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
            <p className=" text-gray-200  mt-4 leading-relaxed">
              {data.lesson.description}
            </p>
            {//tratando dados opcionais
              data.lesson.teacher && (
                <Teacher
                  name={data.lesson.teacher.name}
                  bio={data.lesson.teacher.bio}
                  avatarURL={data.lesson.teacher.avatarURL}
                />
                
              )
            }
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
