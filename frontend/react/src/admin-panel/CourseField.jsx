import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  return params.field;
};
function CourseField() {
  const field = useLoaderData();

  if (!field)
    return (
      <h3 className="text-center text-2xl text-gray-500 py-32">
        لطفا یک فیلد انتخاب کنید
      </h3>
    );
  return <div>{field}</div>;
}

export default CourseField;
