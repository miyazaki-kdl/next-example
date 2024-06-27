//serverActionsを定義するファイルの先頭には以下のディレクティブが必要
//このファイルに定義された非同期関数がserverActionsとして認識されるようになる
"use server";

interface FormState {
  error: string;
}

//console.logが検証ツールでなく、ターミナルに表示されることから関数createTaskがサーバー側で実行されたことがわかる
export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  //DBにタスクを作成する
  // console.log("タスクを作成しました");
  // console.log(formData.get("name"));
  // console.log(taskId);
  console.log(formData);
  state.error = "エラーが発生しました";
  return state;
};
