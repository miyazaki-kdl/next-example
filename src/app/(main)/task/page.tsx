//ルートハンドラにリクエストを送信する関数を定義する
import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  //fetch(リクエスト先のURL, {method: httpリクエスト})
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    cache: "no-store", // キャッシュを無効化できる
  });
  //レスポンスをjson形式
  return await response.json();
};
const TaskPage = async () => {
  //ルートハンドラにリクエストを送信し、Taskの配列を取得する
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <div>
      <div>TaskPage</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
