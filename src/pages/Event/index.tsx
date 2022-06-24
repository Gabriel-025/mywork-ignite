import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";


export function Event() {
  const { slug } = useParams<{ slug: string }>();
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          {slug ?
            <Video lessonSlug={slug} />
            :
            <div className="flex-1 flex items-center justify-center">
              <strong className="text-blue-500  hover:text-2xl">
                Não fique parado, escolha uma aula!
              </strong>
            </div>
          }
          <Sidebar />
        </main>
      </div>
    );
}
