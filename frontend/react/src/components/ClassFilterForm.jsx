function ClassFilterForm() {
  return (
    <form action="#" className="mb-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <label htmlFor="part-1" className="font-bold">
            بخش اول:
          </label>{" "}
          <select
            id="part-1"
            className="bg-transparent border-none container-effects w-[230px] h-[40px] px-2 font-bold"
          >
            <option value="">دبستان</option>
            <option value="">متوسطه اول</option>
            <option value="">متوسطه دوم</option>
            <option value="">دانشگاه</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="part-2" className="font-bold">
            بخش دوم:
          </label>{" "}
          <select
            id="part-2"
            className="bg-transparent border-none container-effects w-[230px] h-[40px] px-2 font-bold"
          >
            <option value="">دبستان</option>
            <option value="">متوسطه اول</option>
            <option value="">متوسطه دوم</option>
            <option value="">دانشگاه</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="part-3" className="font-bold">
            بخش سوم:
          </label>{" "}
          <select
            id="part-3"
            className="bg-transparent border-none container-effects w-[230px] h-[40px] px-2 font-bold"
          >
            <option value="">دبستان</option>
            <option value="">متوسطه اول</option>
            <option value="">متوسطه دوم</option>
            <option value="">دانشگاه</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="bg-[#259984] text-white py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-[#2EBFA5]">
          دریافت اطلاعات
        </button>
      </div>
    </form>
  );
}

export default ClassFilterForm;
