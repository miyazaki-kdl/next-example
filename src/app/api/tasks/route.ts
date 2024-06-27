import { NextResponse } from "next/server";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "あいうえお" },
  { id: 2, name: "かきくけこ" },
];

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

//ルートハンドラの戻り値を返却するにはget関数の中でNextResponseクラスを利用する。
//jsonメソッドを利用する。第二引数にはstatusコードを取得する
export const GET = async () => {
  await sleep(3000);
  return NextResponse.json({ tasks }, { status: 200 });
};
//非同期関数として定義することでルートハンドラーとして機能する
//この関数名GETがhttpメソッドと対応しているため、この場合、/api/tasksのGETリクエストとなる。POSTやPUT、DELETEにも対応している。

export const dynamic = "force-dynamic";
//リクエスト毎に動的に実行するよう設定する→ルートセグメントコンフィグ
//ルートハンドラはデフォルトの設定では静的な要素としてビルドされる→ビルド時に取得するデータが決まってしまう。
//→ユーザーの操作でデータが頻繁に更新される場合がある場合はルートセグメントコンフィグ
