import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";



export function Sidebar() {
  const { data } = useGetLessonsQuery() ; 
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-700">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {!data && <div className="text-gray-300">Carregando...</div>}

        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAT={new Date(lesson.availableAt)}
              lessonType={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
