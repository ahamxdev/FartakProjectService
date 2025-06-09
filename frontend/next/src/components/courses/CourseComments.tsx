import Image from "next/image";

type Comment = {
  user: string;
  text: string;
};

type CourseCommentsProps = {
  comments: Comment[];
};

export default function CourseComments({ comments }: CourseCommentsProps) {
  return (
    <div className="my-10 bg-[#D1D5DB] rounded-2xl p-8 flex flex-col items-center">
      
      <div className="w-full flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
          <Image src="/chatting.svg" alt="Comment Icon" width={24} height={24} />
          <span className="text-lg font-bold">دیدگاه کاربران</span>
        </div>
      </div>
      <button className="w-[80%] max-w-2xl bg-gradient-to-l from-[#1A2737] to-[#232F3E] text-white py-3 rounded-lg font-bold text-lg mb-8 flex items-center justify-center gap-2">
        + ثبت دیدگاه
      </button>
      <ul className="w-[80%] max-w-2xl flex flex-col gap-6">
        {comments.map((c, idx) => (
          <li key={idx} className="bg-white rounded-lg flex items-center justify-between p-6 shadow-sm">
            <div className="flex items-center gap-2">
              
              <div className="bg-[#1A2737] rounded-full w-8 h-8 flex items-center justify-center">
                <Image src="/person.png" alt="User Icon" width={20} height={20} />
              </div>
              <span className="text-base text-gray-600">{c.user}</span>
            </div>
            <span className="text-lg font-semibold">{c.text}</span>
            
          </li>
        ))}
      </ul>
      <div className="w-[80%] max-w-2xl mt-8 rounded-b-lg py-4 flex justify-center mx-auto">
  <a href="#" className="text-[#1450A3] font-semibold flex items-center gap-1">
    <span>دیدن همه نظرات</span>
    <span className="text-xl">&lt;</span>
  </a>
</div>

    </div>
  );
}