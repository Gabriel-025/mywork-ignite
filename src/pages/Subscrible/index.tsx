import {useState} from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const [sidebarOpened, setSidebarOpened] = useState(false);
  
    function OpenSidebar() {
      setSidebarOpened(!sidebarOpened);
    }
  
    return (
      <div className="flex flex-col min-h-screen">
        <Header
          onSidebarOpened={OpenSidebar}
          sidebarOpened={sidebarOpened}
        />
        <main className="flex flex-1">
          {slug ? (
            <Video lessonSlug={slug} />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <strong className="text-blue-500  hover:text-2xl">
                Não fique parado, escolha uma aula!
              </strong>
            </div>
          )}
          {(window.innerWidth >= 1024 || sidebarOpened ) && <Sidebar />}
        </main>
      </div>
    );
}
