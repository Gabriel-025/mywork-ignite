import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR  from "date-fns/locale/pt-BR"
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAT: Date;
  lessonType: "live" | "class";
}

export function Lesson(props: LessonProps) {


  const { slug } = useParams <{ slug: string }>();
  const isLessonAvaibleAt = isPast(props.availableAT);
  const avaibleDateFormatted = format(
    props.availableAT,
    "EEEE' • ' d ' de 'MMMM' • 'k'h'mm", {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;
   
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{avaibleDateFormatted}</span>
      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-300" : ""
        } `}
      >
        <header className="flex items-center justify-between">
          {isLessonAvaibleAt ? (
            <span
              className={`text-sm  font-medium flex gap-2 items-center justify-center
              ${
                isActiveLesson ? "text-white" : "text-blue-500"
              } `}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-[12px] text-orange-500 font-medium flex gap-2 items-center">
              <Lock size={20} />
              Em breve
            </span>
          )}
          {props.lessonType === "live" ? (
            <span
              className={`text-[12px] rounded px-2 py-[0.125rem]  border font-bold 
              ${
                isActiveLesson
                  ? "text-white border-white"
                  : "text-green-300 border-green-300"
              } `}
            >
              AO VIVO
            </span>
          ) : (
              <span className={`text-xs rounded px-2 py-[0.125rem]  border font-bold 
            ${ isActiveLesson
                  ? "text-white border-white"
                  : "text-green-300 border-green-300"
              } `}>
              AULA PRÁTICA
            </span>
          )}
        </header>
        <strong
          className={` mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
