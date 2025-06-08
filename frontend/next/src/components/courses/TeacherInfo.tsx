import Image from "next/image";

type TeacherInfoProps = {
  name: string;
  profile: string;
  bio: string;
  degree: string;
  specialty: string;
};

export default function TeacherInfo({ name, profile, bio, degree, specialty }: TeacherInfoProps) {
  return (
    <div className="my-6 text-right ">
    <h2 className="font-bold text-2xl mb-4">درباره استاد</h2>
    <div className="bg-white p-6 rounded-lg shadow-md border border-black relative overflow-hidden">
      <Image 
        src="/profail.png" 
        alt={name} 
        width={158} 
        height={158} 
        className="rounded-full absolute top-4 right-4 opacity-30" 
      />
      
      <div className="relative z-10 pr-[120px]">
        <p className="text-lg mb-2">نام و نام خانوادگی : {name}</p>
        <p className="text-lg mb-2">مدرک : {degree}</p>
        <p className="text-lg mb-2">تخصص استاد : {specialty}</p>
        <p className="text-lg">توضیحات مربوطه : {bio}</p>
      </div>
    </div>
  </div>
  );
}