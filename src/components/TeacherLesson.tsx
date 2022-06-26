
interface TeacherProps {
  name: string;
  bio: string;
  avatarURL: string;
}

export function Teacher(props: TeacherProps) {
    return (
      <div className="flex items-center gap-4 py-3  mt-6 ">
        <img
          src={props.avatarURL}
          className="rounded-full w-[63.38px] h-[63.38px] border-[2px] border-blue-500"
        />
        <div className="flex flex-col leading-relaxed">
          <strong className="text-2xl block font-bold  ">
            {props.name}
          </strong>
          <span className="text-sm  text-gray-200 block">
            {props.bio}
          </span>
        </div>
      </div>
    );
}