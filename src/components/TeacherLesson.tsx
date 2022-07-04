
interface TeacherProps {
  name: string;
  bio: string;
  avatarURL: string;
}

export function Teacher(props: TeacherProps) {
    return (
      <div className="flex items-center gap-4 pb-0 mt-6 ">
        <img
          src={props.avatarURL}
          className="rounded-full w-[100px] h-[100px] border-[3px] border-green-200 hover:border-green-400"
        />
        <div className="flex flex-col leading-relaxed">
          <strong className="text-2xl block font-bold  ">{props.name}</strong>
          <span className="text-md  text-gray-200 block">{props.bio}</span>
        </div>
      </div>
    );
}