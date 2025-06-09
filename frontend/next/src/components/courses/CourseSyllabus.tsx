import Image from "next/image";

type CourseSyllabusProps = {
  syllabus: { title: string; duration: string }[];
};

export default function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  return (
    <div className="my-6 text-right">
      <h2 className="font-bold text-2xl mb-4">سر فصل ها</h2>
      <p className="text-gray-700 text-[16px] mb-2">۱۷ درس در قالب دو فصل</p>
      <p className="text-gray-700 text-[16px] mb-4">آموزش زبان برنامه نویسی (Python)</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {syllabus.map((item, idx) => (
          <div key={idx} className="bg-[#1E2531] p-4 rounded-lg flex flex-col items-center justify-center text-white text-center">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <div className="flex items-center gap-4 mt-2">
              <Image src="/camera.png" alt="video icon" width={20} height={20} />
              <span className="text-[16px]">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}