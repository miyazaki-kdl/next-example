"use client"; //hooksはサーバーコンポーネントでは使用できない→ファイル先頭に’use client’ディレクティブを追加し、クライアントコンポーネントとする

import { useFormState, useFormStatus } from "react-dom";
import { createTask } from "@/actions/sampleActions";

const ServerActionsPage = () => {
  const taskId = 1; //この値をServerActionsで利用したい

  //javaScriptのbindメソッドを使用することで、フォームに存在しないデータもserverActionsに渡すことができる
  //taskIdを引数に含む新しい関数を定義できる
  //第一引数にnull、第二引数に使用したい変数を渡す
  const createTaskWithTaskId = createTask.bind(null, taskId);

  const initialState = { error: "" };
  //hookの戻り値は[state, formAction]で受け取る
  //stateはserverActionsの戻り値
  //serverActionと同じ動きをする関数
  //第一引数に、serverAction　第二引数にinitialState(stateの初期状態)
  const [state, formAction] = useFormState(createTaskWithTaskId, initialState);

  //useFormStatusは、formが定義されたコンポーネントの直下で使用しても期待通りの動作をしない
  //コンポーネントを一段階ラップする必要がある
  const SubmitButton = () => {
    //pendingはserverActionsが実行中にtrueになる→フォーム送信中にボタンを非活性にできる
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-gray-400 ml-2 px-2 disabled:bg-red-300 "
        disabled={pending}
      >
        送信
      </button>
    );
  };
  return (
    <div>
      <form action={formAction}>
        <input type="text" id="name" name="name" className="bg-gray-200" />
        <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  );
};

export default ServerActionsPage;
