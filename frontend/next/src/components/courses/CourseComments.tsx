
type Comment = {
  user: string;
  text: string;
};

type CourseCommentsProps = {
  comments: Comment[];
};


export default function CourseComments({ comments }: CourseCommentsProps) {
  return (
    <div className="my-6">
      <h2 className="font-bold text-lg mb-2">نظرات کاربران</h2>
      <ul className="space-y-4">
        {comments.map((c, idx) => (
          <li key={idx} className="border p-2 rounded">
            <div className="font-bold">{c.user}</div>
            <div className="text-sm">{c.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}